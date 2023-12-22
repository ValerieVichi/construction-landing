import "../stylesheets/RequestEstimateBtn.css";
import { useState, useEffect } from "react";
import RequestEstimateModal from "./RequestEstimateModal";
import useVersionClass from "../hooks/useVersionClass";

export default function RequestEstimateBtn({
  btnFontSize,
  marginTop,
  // btnBorder,
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
      <a href={requestAnchor} onClick={clickHandler}>
        <button
          className={useVersionClass("estimate-btn")}
          style={{
            fontSize: btnFontSize,
            marginTop: marginTop,
            // border: btnBorder,
            border: "none",
          }}
        >
          REQUEST AN ESTIMATE
        </button>
      </a>
      {menuRequestClicked && (
        <RequestEstimateModal isClicked={requestIsClicked} />
      )}
    </>
  );
}
