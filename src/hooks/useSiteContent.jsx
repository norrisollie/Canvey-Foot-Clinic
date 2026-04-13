import { useMemo } from "react";
import { useSite } from "./useSite";

export function useSiteContent() {
  const { data } = useSite();

  return useMemo(() => {
    const global = data?.global ?? {};
    const layout = data?.layout ?? {};
    const sections = data?.sections ?? [];

    const getSectionByName = (name) =>
      sections.find((section) => section?.meta?.name === name) ?? null;

    return {
      global,
      layout,
      sections,
      getSectionByName,
    };
  }, [data]);
}
