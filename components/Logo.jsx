import "../stylesheets/Logo.css";

export default function Logo({
  logoWidth,
  logoHeight,
  logoMarginR,
  textWidth,
}) {
  return (
    <div className="logo">
      <img
        className="logo-pic"
        src="../images/logo-fs8.png"
        style={{
          width: logoWidth,
          height: logoHeight,
          marginRight: logoMarginR,
        }}
      />
      <img src="../images/logo-text-fs8.png" style={{ width: textWidth }} />
    </div>
  );
}
