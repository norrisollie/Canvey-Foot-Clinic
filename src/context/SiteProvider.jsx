import { useEffect, useState } from "react";
import { SiteContext } from "./site-context";

export function SiteProvider({ children }) {
  const [data, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSiteData() {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}web-data.json`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch site data");
        }
        const data = await response.json();
        setSiteData(data[0]);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSiteData();
  }, []);

  return (
    <SiteContext.Provider value={{ data, loading, error }}>
      {children}
    </SiteContext.Provider>
  );
}
