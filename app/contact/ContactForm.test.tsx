import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it, jest } from "@jest/globals";
import { ContactForm } from "./ContactForm";
import { formspreeUrl } from "./contact.data";

it("submits a message with only name, email and message", async () => {
  const originalFetch = global.fetch;
  const fetchMock = jest.fn<typeof fetch>().mockResolvedValue({
    ok: true,
  } as Response);
  global.fetch = fetchMock;

  try {
    render(<ContactForm />);
    expect(screen.queryByLabelText(/subject/i)).toBeNull();

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Manuel" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "manuel@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Let's discuss a project." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith(
        formspreeUrl,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({
            name: "Manuel",
            email: "manuel@example.com",
            message: "Let's discuss a project.",
          }),
        }),
      ),
    );
    expect(await screen.findByText("Message sent.")).toBeTruthy();
  } finally {
    global.fetch = originalFetch;
  }
});
