import "../stylesheets/_Header.scss";
import Container from "./Container";
import EstForm from "./EstForm";
import { useMedia } from "../hooks/useMedia";
import useVersion, { ELECTRIC_VARIANT } from "../hooks/useVersion";
// import RequestEstimateBtn from "./RequestEstimateBtn";

export default function Header() {
  const flexDirectionChange = useMedia("(max-width: 900px)");
  const flexClass = flexDirectionChange ? "flex-column" : "flex-row";

  const variant = useVersion();
  const variantClass =
    variant === ELECTRIC_VARIANT ? "electric-class" : "plumber-class";

  return (
    <div className="header" id="request-anchor">
      <div className={`header-bckgr ${variantClass}`}>
        <Container classToAdd={flexClass}>
          <div className="header-moto">
            <h1>Professional electricians in Utah</h1>
            <p>
              We understand that electrical issues can be stressful,
              time-consuming, and costly. That is why we have created a service
              dedicated to connecting you with the best electricians in state,
              making your life easier. Do not let electrical problems dampen
              your day.
            </p>
          </div>
          <div className="header-form">
            <EstForm
              border="1px solid #fff"
              bgColor="rgba(255, 255, 255, 0.3)"
              textColor="#fff"
              estimateBtnFontSize="16px"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
