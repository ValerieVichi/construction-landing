import "../stylesheets/build/Footer.css";
import useVersionPath from "../hooks/useVersionPath";
import useVersionClass from "../hooks/useVersionClass";
import { NavLink } from "react-router-dom";

export default function FooterInfo() {
  const baseURL = useVersionPath();
  return (
    <>
      <div className="footer-contact-info">
        <div className="footer-contact-info-detail">
          <a href="mailto: info@pandoplumbing.com">
            <div className="footer-email">
              <img src={`${baseURL}/email-icon-fs8.png`} alt="email icon" />

              <p>info@pandoplumbing.com</p>
            </div>
          </a>
          <div className="footer-address">
            <img src={`${baseURL}/address-icon-fs8.png`} alt="address icon" />
            <p>1763 Moose Hollow Circle Draper, Utah 84020</p>
          </div>
        </div>
        <img src={`${baseURL}/rating-fs8.png`} alt="A+ Rating" />
      </div>
      <NavLink to={"/privacy"} className={useVersionClass("footer-policies")}>
        <div>Privacy Policy</div>
        <div className="break" />
        <div>Terms of Service</div>
      </NavLink>
    </>
  );
}
