import { describe, expect, it } from "vitest";
import getSectionNames from "./getSectionNames";

describe("getSectionNames", () => {
  it("returns ids for sections marked as links", () => {
    const sections = [
      { meta: { id: "home", isLink: true } },
      { meta: { id: "services", isLink: true } },
      { meta: { id: "footer", isLink: false } },
    ];

    expect(getSectionNames(sections)).toEqual(["home", "services"]);
  });

  it("returns an empty array when no sections are links", () => {
    const sections = [
      { meta: { id: "home", isLink: false } },
      { meta: { id: "services", isLink: false } },
    ];

    expect(getSectionNames(sections)).toEqual([]);
  });
});
