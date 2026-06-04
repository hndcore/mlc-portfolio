"use client";

import { ArrowRight } from "lucide-react";
import { contactFormFields, contactFormMessages } from "./contact.data";
import { useContactForm } from "./hooks/useContactForm";

const fieldClassName = (hasError: boolean) =>
  `w-full rounded-none border bg-white/[0.02] px-5 font-mono text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:bg-white/[0.04] ${
    hasError
      ? "border-rose-400/80 focus:border-rose-300"
      : "border-white/10 focus:border-lime-300/70"
  }`;

export function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    onSubmit,
    status,
    submitStatus,
  } = useContactForm();

  if (submitStatus === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="max-w-2xl border border-lime-300/30 bg-lime-300/[0.03] p-6 font-mono sm:p-8"
      >
        <p className="text-2xl font-semibold leading-9 text-lime-300 sm:text-3xl sm:leading-10">
          {contactFormMessages.sentTitle}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
          {contactFormMessages.sentDescription}
        </p>
      </div>
    );
  }

  return (
    <form className="max-w-2xl space-y-6" noValidate onSubmit={onSubmit}>
      {contactFormFields.map((field) => {
        const error = errors[field.name];
        const errorId = `${field.name}-error`;

        return (
          <div key={field.name} className="space-y-3">
            <label
              htmlFor={field.name}
              className="block font-mono text-xs font-semibold uppercase tracking-wide text-zinc-200"
            >
              {field.label} <span className="text-lime-300">*</span>
            </label>

            {"rows" in field ? (
              <textarea
                id={field.name}
                rows={field.rows}
                placeholder={field.placeholder}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={`${fieldClassName(Boolean(error))} resize-y py-4`}
                {...register(field.name)}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={`${fieldClassName(Boolean(error))} h-14`}
                {...register(field.name)}
              />
            )}

            {error && (
              <p id={errorId} className="font-mono text-xs text-rose-300">
                {error.message}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center gap-7 border border-white/15 bg-white/[0.02] px-5 font-mono text-xs font-semibold uppercase tracking-wide text-lime-300 transition hover:border-lime-300/70 hover:bg-lime-300 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-300/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Send message
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <p
        aria-live="polite"
        className={`font-mono text-xs ${
          submitStatus === "error" || Object.keys(errors).length > 0
            ? "text-rose-300"
            : "text-zinc-400"
        }`}
      >
        {status || contactFormMessages.default}
      </p>
    </form>
  );
}
