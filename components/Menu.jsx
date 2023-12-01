import { useState } from "react";
import { useMedia } from "../hooks/useMedia";
import Logo from "./Logo";
import Container from "./Container";
import RequestEstimateBtn from "./RequestEstimateBtn";
import "../stylesheets/Menu.scss";

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  function menuToggler() {
    setMenuActive(!menuActive);
    document.body.classList.toggle("lock-scroll");
  }

  const switchLogo550 = useMedia("(max-width: 550px)");

  const logoDetails = switchLogo550
    ? {
        logoWidth: "46px",
        logoHeight: "66px",
        logoMarginR: "7px",
        textWidth: "68px",
      }
    : { logoWidth: "82px", textWidth: "122px", logoMarginR: "12px" };

  return (
    <div className="menu-parent">
      <Container>
        <div className="menu">
          <Logo logoProps={logoDetails} />
          <div className="menu-btns">
            <div className="about-btn">ABOUT</div>
            <RequestEstimateBtn />
          </div>
          <div className="menu-dropdown">
            <div
              onClick={menuToggler}
              className={menuActive ? "menu-dropbtn hamburger" : "menu-dropbtn"}
            >
              <div id={menuActive && "top-bun"} className="h-top" />
              <div id={menuActive && "meat"} className="h-meat" />
              <div id={menuActive && "bottom-bun"} className="h-bottom" />
            </div>
            <div className={menuActive ? "menu-content show" : "menu-content"}>
              <a href="#">About Us</a>
              <a href="#">Request an estimate</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
