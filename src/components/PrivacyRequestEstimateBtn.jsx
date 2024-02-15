import "../stylesheets/build/RequestEstimateBtn.css";
import { useState, useEffect } from "react";
import RequestEstimateModal from "./RequestEstimateModal";
import useVersionClass from "../hooks/useVersionClass";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivacyRequestEstimateBtn({
  btnFontSize,
  marginTop,
  requestAnchor,
  menuRequestClicked,
}) {
  const [requestIsClicked, setRequestIsClicked] = useState(false);

  useEffect(() => {
    if (requestIsClicked) {
      setTimeout(() => {
        setRequestIsClicked(false);
      }, 2000);
    }
  }, [requestIsClicked]);

  function clickHandler() {
    setRequestIsClicked(true);
  }

  return (
    <>
      <NavLink to={`/${requestAnchor}`} onClick={clickHandler}>
        <button
          className={useVersionClass("estimate-btn")}
          style={{
            fontSize: btnFontSize,
            marginTop: marginTop,
            border: "none",
          }}
        >
          REQUEST AN ESTIMATE
        </button>
      </NavLink>
      {menuRequestClicked && (
        <RequestEstimateModal isClicked={requestIsClicked} />
      )}
    </>
  );
}

PrivacyRequestEstimateBtn.propTypes = {
  btnFontSize: PropTypes.string,
  marginTop: PropTypes.string,
  requestAnchor: PropTypes.string,
  menuRequestClicked: PropTypes.bool,
};
