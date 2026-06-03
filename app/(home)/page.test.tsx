import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Home from "./page";

describe("Home", () => {
  it("renders the portfolio hero", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /less bugs\. less complexity\. better software\./i,
    });
    const projectsLink = screen.getByRole("link", {
      name: /view all case studies/i,
    });

    expect(heading).toBeTruthy();
    expect(projectsLink.getAttribute("href")).toBe("/projects");
  });
});
