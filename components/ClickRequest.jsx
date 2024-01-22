import { useState, useEffect } from "react";
import RequestEstimateModal from "./RequestEstimateModal";

export default function useClickRequest({
  children,
  requestAnchor,
  closeMenu,
  needToCloseMenu,
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
    if (needToCloseMenu) {
      closeMenu();
    }
  }

  return (
    <>
      <a href={requestAnchor} onClick={clickHandler}>
        {children}
      </a>
      {requestIsClicked && (
        <RequestEstimateModal isClicked={requestIsClicked} />
      )}
    </>
  );
}
