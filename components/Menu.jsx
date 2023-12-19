import { useState } from "react";
import { useMedia } from "../hooks/useMedia";
import Logo from "./Logo";
import Container from "./Container";
import RequestEstimateBtn from "./RequestEstimateBtn";
import "../stylesheets/Menu.scss";
import FooterInfo from "./FooterInfo";
import { NavLink } from "react-router-dom";

export default function Menu({ requestAnchor }) {
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
          <NavLink to="/">
            <Logo logoProps={logoDetails} />
          </NavLink>

          <div className="menu-btns">
            <NavLink className="about-btn" to="/about">
              ABOUT
            </NavLink>
            <RequestEstimateBtn
              btnBorder="none"
              requestAnchor={requestAnchor}
            />
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
              <div className="menu-separator" />
              <Container>
                <a className="burger-a" href="#">
                  <div className="menu-about-us">
                    <div className="burger-menu-item">
                      <div>
                        <img src="../images/info.png" alt="info icon" />
                        <p>About Us</p>
                      </div>
                      <img
                        className="burger-forward-arrow"
                        src="../images/carousel-right.png"
                      />
                    </div>
                  </div>
                </a>
                <a
                  className="burger-a"
                  href={requestAnchor}
                  onClick={menuToggler}
                >
                  <div className="menu-request">
                    <div className=" burger-menu-item">
                      <div>
                        <img src="../images/request.png" alt="request icon" />
                        <p>Request An Estimate</p>
                      </div>
                      <img
                        className="burger-forward-arrow"
                        src="../images/carousel-right.png"
                      />
                    </div>
                  </div>
                </a>
              </Container>
              <div>
                <div className="menu-separator bottom-s" />
                <Container>
                  <FooterInfo />
                </Container>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
