import "../stylesheets/build/RequestEstimateBtn.css";
import useVersionClass from "../hooks/useVersionClass";
import PropTypes from "prop-types";

export default function RequestEstimateBtn({ btnFontSize, marginTop }) {
  return (
    <>
      <button
        type="submit"
        id="estimate-btn"
        className={useVersionClass("estimate-btn")}
        style={{
          fontSize: btnFontSize,
          marginTop: marginTop,
          border: "none",
        }}
      >
        REQUEST AN ESTIMATE
      </button>
    </>
  );
}

RequestEstimateBtn.propTypes = {
  btnFontSize: PropTypes.string,
  marginTop: PropTypes.string,
};
