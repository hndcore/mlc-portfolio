import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { existsSync } from "node:fs";
import path from "node:path";
import { ProjectCarousel } from "./ProjectCarousel";
import { projects } from "./projects.data";

describe("ProjectCarousel", () => {
  it("navigates screenshots with buttons and keyboard, wrapping both ways", () => {
    const project = projects[0]!;
    render(<ProjectCarousel {...project} />);

    expect(screen.getByRole("img").getAttribute("alt")).toBe(
      project.images[0]!.alt,
    );
    fireEvent.click(screen.getByRole("button", { name: "Previous image" }));
    expect(screen.getByRole("img").getAttribute("alt")).toBe(
      project.images.at(-1)?.alt,
    );
    fireEvent.click(screen.getByRole("button", { name: "Next image" }));
    expect(screen.getByRole("img").getAttribute("alt")).toBe(
      project.images[0]!.alt,
    );
    fireEvent.keyDown(screen.getByRole("button", { name: "Next image" }), {
      key: "ArrowRight",
    });
    expect(screen.getByRole("img").getAttribute("alt")).toBe(
      project.images[1]!.alt,
    );
    expect(screen.getByText(`2 / ${project.images.length}`)).toBeTruthy();
    fireEvent.keyDown(screen.getByRole("button", { name: "Previous image" }), {
      key: "ArrowLeft",
    });
    expect(screen.getByRole("img").getAttribute("alt")).toBe(
      project.images[0]!.alt,
    );
  });

  it("omits navigation for a single image", () => {
    render(<ProjectCarousel {...projects[projects.length - 1]!} />);
    expect(screen.queryByRole("button", { name: "Previous image" })).toBeNull();
    expect(screen.queryByRole("button", { name: "Next image" })).toBeNull();
    expect(screen.getByRole("button", { name: /Enlarge image:/ })).toBeTruthy();
  });

  it("enlarges the current image and closes with the button or backdrop", () => {
    const project = projects[0]!;
    render(<ProjectCarousel {...project} />);
    const dialog = screen.getByRole("dialog", { hidden: true });
    // jsdom does not implement the native dialog methods.
    Object.assign(dialog, {
      showModal: () => dialog.setAttribute("open", ""),
      close: () => dialog.removeAttribute("open"),
    });

    fireEvent.click(screen.getByRole("button", { name: "Next image" }));
    const trigger = screen.getByRole("button", {
      name: `Enlarge image: ${project.images[1]!.alt}`,
    });
    fireEvent.click(trigger);
    expect(dialog.hasAttribute("open")).toBe(true);
    expect(within(dialog).getByRole("img").getAttribute("alt")).toBe(
      project.images[1]!.alt,
    );
    const close = within(dialog).getByRole("button", {
      name: "Close enlarged image",
    });
    fireEvent.keyDown(close, { key: "ArrowRight" });
    expect(within(dialog).getByRole("img").getAttribute("alt")).toBe(
      project.images[1]!.alt,
    );
    fireEvent.click(close);
    expect(dialog.hasAttribute("open")).toBe(false);
    fireEvent.click(trigger);
    fireEvent.click(dialog);
    expect(dialog.hasAttribute("open")).toBe(false);
  });

  it("references existing screenshots for every project", () => {
    for (const project of projects) {
      expect(project.images.length).toBeGreaterThan(0);
      for (const image of project.images) {
        expect(existsSync(path.join(process.cwd(), "public", image.src))).toBe(
          true,
        );
      }
    }
  });
});
