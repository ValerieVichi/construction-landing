import EstForm from "./EstForm";
import Logo from "./Logo";
import Container from "./Container";
import "../stylesheets/Footer.scss";

import { useMedia } from "../hooks/useMedia";
import FooterInfo from "./FooterInfo";
import useVersionText from "../hooks/useVersionText";

export default function Footer() {
  const switchLogo550 = useMedia("(max-width: 550px)");
  const switchLogo1000 = useMedia("(max-width: 1000px)");
  const switchLogo1400 = useMedia("(max-width: 1400px)");

  const logoDetails = switchLogo550
    ? {
        logoWidth: "83px",
        logoHeight: "120px",
        logoMarginR: "13px",
        textWidth: "123px",
      }
    : switchLogo1000
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

  const text = useVersionText();

  return (
    <div className="footer">
      <Container classToAdd={flexClass}>
        <div className="footer-info">
          <Logo logoProps={logoDetails} />
          <p className="footer-statement">{text.footer_p}</p>
          <FooterInfo />
          <p className="footer-copyright-lg">© 2023 BIG LITTLE HELP</p>
        </div>
        <div className="footer-form" id="about-request-anchor">
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
