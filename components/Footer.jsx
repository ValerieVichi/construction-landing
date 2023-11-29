import EstForm from "./EstForm";
import Logo from "./Logo";
import Container from "./Container";
import "../stylesheets/Footer.scss";

import { useMedia } from "../hooks/useMedia";

export default function Footer() {
  const switchLogo1400 = useMedia("(max-width: 1400px)");
  const switchLogo1000 = useMedia("(max-width: 1000px)");

  const logoDetails = switchLogo1000
    ? {
        logoWidth: "119px",
        logoHeight: "172px",
        logoMarginR: "15px",
        textWidth: "177px",
      }
    : switchLogo1400
    ? {
        logoWidth: "137px",
        logoHeight: "198px",
        logoMarginR: "15px",
        textWidth: "203.8px",
      }
    : {
        logoWidth: "173px",
        logoHeight: "250px",
        logoMarginR: "25px",
        textWidth: "257px",
      };

  const flexDirectionChange = useMedia("(max-width: 900px)");
  const flexClass = flexDirectionChange ? "flex-column" : "flex-row";

  return (
    <div className="footer">
      <Container classToAdd={flexClass}>
        <div className="footer-info">
          <Logo logoProps={logoDetails} />
          <p className="footer-statement">
            Our company specializes in quick home assistance with electrical
            repairs and more.
          </p>
          <div className="footer-contact-info">
            <div className="footer-contact-info-detail">
              <div className="footer-email">
                <img src="../images/email-icon-fs8.png" alt="email icon" />
                <p>info@pandoplumbing.com</p>
              </div>
              <div className="footer-address">
                <img src="../images/address-icon-fs8.png" alt="address icon" />
                <p>1763 Moose Hollow Circle Draper, Utah 84020</p>
              </div>
            </div>
            <img src="../images/rating-fs8.png" alt="A+ Rating" />
          </div>
          <div className="footer-policies">
            <div>Privacy Policy</div>
            <div className="break" />
            <div>Terms of Service</div>
          </div>
          <p className="footer-copyright-lg">© 2023 BIG LITTLE HELP</p>
        </div>
        <div className="footer-form">
          <EstForm
            textColor="#111"
            bgColor="rgba(177, 177, 177, 0.30)"
            border="1px solid #929292"
            estimateBtnFontSize="16px"
          />
        </div>
        <p className="footer-copyright-sm">© 2023 BIG LITTLE HELP</p>
      </Container>
    </div>
  );
}
