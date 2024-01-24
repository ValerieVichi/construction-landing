import "../stylesheets/Logo.css";
import useVersionPath from "../hooks/useVersionPath";
import PropTypes from "prop-types";

export default function Logo({
  logoWidth,
  logoHeight,
  logoMarginR,
  textWidth,
}) {
  const urlBase = useVersionPath();
  return (
    <div className="logo">
      <img
        className="logo-pic"
        src={`${urlBase}/logo-fs8.png`}
        style={{
          width: logoWidth,
          height: logoHeight,
          marginRight: logoMarginR,
        }}
      />
      <img src={`${urlBase}/logo-text-fs8.png`} style={{ width: textWidth }} />
    </div>
  );
}

Logo.propTypes = {
  logoWidth: PropTypes.string,
  logoHeight: PropTypes.string,
  logoMarginR: PropTypes.string,
  textWidth: PropTypes.string,
};
