import EstForm from "./EstForm";
import Logo from "./Logo";
import Container from "./Container";
import "../stylesheets/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <Container classToAdd="flex-row">
        <div className="footer-info">
          <Logo
            logoWidth="173px"
            logoHeight="250px"
            logoMarginR="25px"
            textWidth="257px"
          />
          <p className="footer-statement">
            Our company specializes in quick home assistance with electrical
            repairs and more.
          </p>
          <div className="footer-contact-info">
            <div className="footer-contact-info-detail">
              <div className="footer-email">
                <img src="../images/email-icon.svg" alt="email icon" />
                <p>info@pandoplumbing.com</p>
              </div>
              <div className="footer-address">
                <img src="../images/address-icon.svg" alt="address icon" />
                <p>1763 Moose Hollow Circle Draper, Utah 84020</p>
              </div>
            </div>
            <img src="../images/rating.svg" alt="A+ Rating" />
          </div>
          <div className="footer-policies">
            <div>Privacy Policy</div>
            <div className="break" />
            <div>Terms of Service</div>
          </div>
          <p className="footer-copyright">© 2023 BIG LITTLE HELP</p>
        </div>
        <EstForm
          textColor="#111"
          bgColor="rgba(177, 177, 177, 0.30)"
          border="1px solid #929292"
          estimateBtnFontSize="16px"
        />
      </Container>
    </div>
  );
}
