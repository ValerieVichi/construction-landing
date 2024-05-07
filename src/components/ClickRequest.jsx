import { useState } from "react";
import RequestEstimateModal from "./RequestEstimateModal";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function ClickRequest({
  children,
  closeMenu,
  needToCloseMenu,
  className,
}) {
  const [requestIsClicked, setRequestIsClicked] = useState(false);
  // const modal = document.getElementsByClassName("popup-page-blackout");

  function clickHandler() {
    setRequestIsClicked(true);
    // modal.classList.toggle("popup--active");
    if (needToCloseMenu) {
      closeMenu();
    }
  }

  return (
    <>
      <div className={className} onClick={clickHandler}>
        {children}
      </div>
      {
        requestIsClicked &&
          createPortal(
            <RequestEstimateModal
              isClicked={requestIsClicked}
              closeModalHandler={() => setRequestIsClicked(false)}
            />,
            document.body
          )
        // : undefined
      }
    </>
  );
}

ClickRequest.propTypes = {
  closeMenu: PropTypes.func,
  needToCloseMenu: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
};
