"use client";

import { useState } from "react";
import { FieldErrors, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  contactFormMessages,
  formspreeUrl,
  type ContactFormFieldName,
} from "../contact.data";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Use at least 2 characters."),
  email: z.email("Use a valid email address."),
  subject: z.string().trim().min(4, "Use at least 4 characters."),
  message: z.string().trim().min(10, "Use at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
type SubmitStatus = "idle" | "sending" | "sent" | "error";

const contactFormResolver: Resolver<ContactFormValues> = async (values) => {
  const result = contactFormSchema.safeParse(values);

  if (result.success) {
    return {
      values: result.data,
      errors: {},
    };
  }

  const errors = result.error.issues.reduce<FieldErrors<ContactFormValues>>(
    (fieldErrors, issue) => {
      const field = issue.path[0] as ContactFormFieldName | undefined;

      if (field && !fieldErrors[field]) {
        fieldErrors[field] = {
          type: issue.code,
          message: issue.message,
        };
      }

      return fieldErrors;
    },
    {},
  );

  return {
    values: {},
    errors,
  };
};

export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [status, setStatus] = useState("");
  const form = useForm<ContactFormValues>({
    resolver: contactFormResolver,
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitToFormspree: SubmitHandler<ContactFormValues> = async (data) => {
    setSubmitStatus("sending");
    setStatus(contactFormMessages.sending);

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the message.");
      }

      form.reset();
      setSubmitStatus("sent");
      setStatus(contactFormMessages.sentTitle);
    } catch {
      setSubmitStatus("error");
      setStatus(contactFormMessages.error);
    }
  };

  const handleInvalidSubmit = () => {
    setSubmitStatus("idle");
    setStatus(contactFormMessages.invalid);
  };

  return {
    ...form,
    status,
    submitStatus,
    onSubmit: form.handleSubmit(submitToFormspree, handleInvalidSubmit),
  };
}
