import { useEffect, useState } from "react";

export const useMedia = (query) => {
  const [matches, setMatches] = useState(undefined);

  useEffect(() => {
    const mediaMatch = window.matchMedia(query);
    const handler = () => setMatches(mediaMatch.matches);
    window.addEventListener("resize", handler);
    handler();
    return () => window.removeEventListener("resize", handler);
  }, [query]);

  return matches;
};
