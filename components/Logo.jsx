import "../stylesheets/Logo.css";

export default function Logo({ logoProps }) {
  return (
    <div className="logo">
      <img
        className="logo-pic"
        src="../images/logo-fs8.png"
        style={{
          width: logoProps.logoWidth,
          height: logoProps.logoHeight,
          marginRight: logoProps.logoMarginR,
        }}
      />
      <img
        src="../images/logo-text-fs8.png"
        style={{ width: logoProps.textWidth }}
      />
    </div>
  );
}
