import "../stylesheets/build/RequestEstimateBtn.css";
import { useState } from "react";
import RequestEstimateModal from "./RequestEstimateModal";
import useVersionClass from "../hooks/useVersionClass";
import PropTypes from "prop-types";

export default function RequestEstimateBtn({
  btnFontSize,
  marginTop,
  menuRequestClicked,
}) {
  const [requestIsClicked, setRequestIsClicked] = useState(false);

  // useEffect(() => {
  //   if (requestIsClicked) {
  //     setTimeout(() => {
  //       setRequestIsClicked(false);
  //     }, 2000);
  //   }
  // }, [requestIsClicked]);

  function clickHandler() {
    setRequestIsClicked(true);
  }

  return (
    <>
      <div
        onClick={clickHandler}
        id="estimate-btn"
        className={useVersionClass("estimate-btn")}
        style={{
          fontSize: btnFontSize,
          marginTop: marginTop,
          border: "none",
        }}
      >
        REQUEST AN ESTIMATE
      </div>
      {menuRequestClicked && (
        <RequestEstimateModal
          isClicked={requestIsClicked}
          closeModalHandler={() => setRequestIsClicked(false)}
        />
      )}
    </>
  );
}

RequestEstimateBtn.propTypes = {
  btnFontSize: PropTypes.string,
  marginTop: PropTypes.string,
  menuRequestClicked: PropTypes.bool,
};
