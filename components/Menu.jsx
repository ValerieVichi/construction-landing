import { useState } from "react";
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

  return (
    <div className="menu-parent">
      <Container>
        <div className="menu">
          <Logo
            logoProps={{
              logoWidth: "82px",
              textWidth: "122px",
              logoMarginR: "12px",
            }}
          />
          <div className="menu-btns">
            <div className="about-btn">ABOUT</div>
            <RequestEstimateBtn />
          </div>
          <div className="menu-dropdown">
            <div onClick={menuToggler} className="menu-dropbtn" />
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
