import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Nav from "./Nav";

vi.mock("../../hooks/useSiteContent", () => ({
  useSiteContent: () => ({
    sections: [
      { meta: { name: "home", showInNav: true } },
      { meta: { name: "services", showInNav: true } },
      { meta: { name: "footer", showInNav: false } },
    ],
  }),
}));

describe("Nav", () => {
  it("renders links for sections with showInNav = true", () => {
    render(<Nav />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    const servicesLink = screen.getByRole("link", { name: "Services" });

    expect(homeLink).toHaveAttribute("href", "#home");
    expect(servicesLink).toHaveAttribute("href", "#services");
    expect(screen.queryByRole("link", { name: "Footer" })).toBeNull();
  });
});
