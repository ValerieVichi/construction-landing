export const ELECTRIC_VARIANT = "electric";
export const PLUMBER_VARIANT = "plumber";

export default function useVersion() {
  return import.meta.env.VITE_SITE_VERSION === 'plumbing' ? PLUMBER_VARIANT : ELECTRIC_VARIANT;
  // return ELECTRIC_VARIANT;
}
