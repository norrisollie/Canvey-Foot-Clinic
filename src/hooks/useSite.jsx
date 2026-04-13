import { useContext } from "react";
import { SiteContext } from "../context/site-context";

export function useSite() {
  const context = useContext(SiteContext);

  if (context === null) {
    throw new Error("useSite must be used within SiteProvider");
  }

  return context;
}
