import { useState } from "react";
import { useMedia } from "../hooks/useMedia";
import Logo from "./Logo";
import Container from "./Container";
import RequestEstimateBtn from "./RequestEstimateBtn";
import PrivacyRequestEstimateBtn from "./PrivacyRequestEstimateBtn";
import "../stylesheets/build/Menu.css";
import FooterInfo from "./FooterInfo";
import { NavLink } from "react-router-dom";
import useVersionClass from "../hooks/useVersionClass";
import useVersionPath from "../hooks/useVersionPath";
import ClickRequest from "./ClickRequest";
import PropTypes from "prop-types";

export default function Menu({
  requestAnchor,
  bottomLineColor,
  isPrivacyPage,
}) {
  const [menuActive, setMenuActive] = useState(false);

  function menuToggler() {
    setMenuActive(!menuActive);
    document.body.classList.toggle("lock-scroll");
  }

  const switchLogo550 = useMedia("(max-width: 550px)");
  const switchLogo2300 = useMedia("(max-width: 2300px)");

  const logoDetails = switchLogo550
    ? {
        logoWidth: "46px",
        logoHeight: "66px",
        logoMarginR: "7px",
        textWidth: "68px",
      }
    : switchLogo2300
    ? {
        logoWidth: "65px",
        logoHeight: "auto",
        textWidth: "110px",
        logoMarginR: "9px",
      }
    : { logoWidth: "82px", textWidth: "122px", logoMarginR: "12px" };

  const baseURL = useVersionPath();

  return (
    <div
      className={switchLogo2300 ? "menu-parent menu-sm" : "menu-parent"}
      style={{ borderBottom: `1px solid ${bottomLineColor}` }}
    >
      <Container>
        <div className={switchLogo2300 ? "menu menu-sm" : "menu"}>
          <NavLink
            to="/"
            onClick={document.body.classList.toggle("lock-scroll")}
          >
            <Logo
              logoWidth={logoDetails.logoWidth}
              logoHeight={logoDetails.logoHeight}
              logoMarginR={logoDetails.logoMarginR}
              textWidth={logoDetails.textWidth}
            />
          </NavLink>

          <div className="menu-btns">
            <NavLink className={useVersionClass("about-btn")} to="/about">
              ABOUT
            </NavLink>
            {isPrivacyPage ? (
              <PrivacyRequestEstimateBtn
                menuRequestClicked={true}
                btnBorder="none"
                requestAnchor={requestAnchor}
              />
            ) : (
              <RequestEstimateBtn
                menuRequestClicked={true}
                btnBorder="none"
                requestAnchor={requestAnchor}
              />
            )}
          </div>
          <div className="menu-dropdown">
            <div
              onClick={menuToggler}
              className={menuActive ? "menu-dropbtn hamburger" : "menu-dropbtn"}
            >
              <div id={menuActive ? "top-bun" : ""} className="h-top" />
              <div id={menuActive ? "meat" : ""} className="h-meat" />
              <div id={menuActive ? "bottom-bun" : ""} className="h-bottom" />
            </div>
            <div className={menuActive ? "menu-content show" : "menu-content"}>
              <div className="menu-separator" />
              <Container>
                <NavLink to="/about" className="burger-a" onClick={menuToggler}>
                  <div className={useVersionClass("menu-about-us")}>
                    <div className="burger-menu-item">
                      <div>
                        <img src={`${baseURL}/info.png`} alt="info icon" />
                        <p>About Us</p>
                      </div>
                      <img
                        className="burger-forward-arrow"
                        src={`${baseURL}/carousel-right.png`}
                      />
                    </div>
                  </div>
                </NavLink>
                <ClickRequest
                  requestAnchor={requestAnchor}
                  needToCloseMenu={true}
                  closeMenu={menuToggler}
                  className="burger-a"
                >
                  <div className={useVersionClass("menu-request")}>
                    <div className=" burger-menu-item">
                      <div>
                        <img
                          src={`${baseURL}/request.png`}
                          alt="request icon"
                        />
                        <p>Request An Estimate</p>
                      </div>
                      <img
                        className="burger-forward-arrow"
                        src={`${baseURL}/carousel-right.png`}
                      />
                    </div>
                  </div>
                </ClickRequest>
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

Menu.propTypes = {
  requestAnchor: PropTypes.string,
  bottomLineColor: PropTypes.string,
  isPrivacyPage: PropTypes.bool,
};
