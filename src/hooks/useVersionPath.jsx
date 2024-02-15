import useVersion, { ELECTRIC_VARIANT, PLUMBER_VARIANT } from "./useVersion";

const ELECTRIC_VARIANT_PATH = "./src/images/electricians";
const PLUMBER_VARIANT_PATH = "./src/images/plumbers";

export default function useVersionPath() {
  const variant = useVersion();
  if (variant === ELECTRIC_VARIANT) {
    return ELECTRIC_VARIANT_PATH;
  } else if (variant === PLUMBER_VARIANT) {
    return PLUMBER_VARIANT_PATH;
  }
}
