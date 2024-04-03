import "../stylesheets/build/FloatingRequest.css";
import PropTypes from "prop-types";
import useVersionPath from "../hooks/useVersionPath";
import { useEffect, useState } from "react";

export default function FloatingRequest({ isMainPage }) {
  const baseURL = useVersionPath();
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    if (!isMainPage) {
      setShowFloating(true);
    } else {
      const header = document.getElementsByClassName("header");

      const handleScroll = () => {
        if (header[0].getBoundingClientRect().bottom <= 810) {
          setShowFloating(true);
        } else setShowFloating(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMainPage]);

  if (!showFloating) {
    return null;
  }
  return (
    <div className="floating-request">
      <img src={`${baseURL}/floating-request.png`} />
    </div>
  );
}

FloatingRequest.propTypes = {
  isMainPage: PropTypes.bool,
};
