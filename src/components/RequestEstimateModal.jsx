import { useEffect, useRef } from "react";
import "../stylesheets/build/RequestEstimateModal.css";
import PropTypes from "prop-types";
import EstForm from "./EstForm";

export default function RequestEstimateModal({ isClicked, closeModalHandler }) {
  const formBlockRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (formBlockRef.current && !formBlockRef.current.contains(e.target)) {
      closeModalHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  if (!isClicked) return null;
  return (
    <div className="popup-page-blackout">
      <div className="popup-form" ref={formBlockRef}>
        <EstForm
          textColor="#111"
          bgColor="rgba(177, 177, 177, 0.30)"
          border="1px solid #929292"
          estimateBtnFontSize="16px"
          onClickFormSubmit={closeModalHandler}
        />
        <div className="popup-form-close" onClick={closeModalHandler}>
          <img id="popup-form-img" src="src/images/clear.png" alt="close" />
        </div>
      </div>
    </div>
  );
}

RequestEstimateModal.propTypes = {
  isClicked: PropTypes.bool,
  closeModalHandler: PropTypes.func,
  isNotMenuRequest: PropTypes.bool,
};
