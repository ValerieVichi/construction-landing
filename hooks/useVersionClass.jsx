import useVersion, { ELECTRIC_VARIANT, PLUMBER_VARIANT } from "./useVersion";

export default function useVersionClass(oldClassName) {
  const version = useVersion();
  if (version === ELECTRIC_VARIANT) {
    return `${oldClassName} ${oldClassName + "-electric"}`;
  } else if (version === PLUMBER_VARIANT) {
    return `${oldClassName} ${oldClassName + "-plumber"}`;
  }
}
