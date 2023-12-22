import "../stylesheets/Logo.css";
import useVersionPath from "../hooks/useVersionPath";

export default function Logo({ logoProps }) {
  const urlBase = useVersionPath();
  return (
    <div className="logo">
      <img
        className="logo-pic"
        src={`${urlBase}/logo-fs8.png`}
        style={{
          width: logoProps.logoWidth,
          height: logoProps.logoHeight,
          marginRight: logoProps.logoMarginR,
        }}
      />
      <img
        src={`${urlBase}/logo-text-fs8.png`}
        style={{ width: logoProps.textWidth }}
      />
    </div>
  );
}
