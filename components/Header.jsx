import "../stylesheets/_Header.scss";
import Container from "./Container";
import EstForm from "./EstForm";
import { useMedia } from "../hooks/useMedia";

export default function Header() {
  const flexDirectionChange = useMedia("(max-width: 900px)");
  const flexClass = flexDirectionChange ? "flex-column" : "flex-row";

  return (
    <div className="header" id="request-anchor">
      <div className="header-bckgr">
        <Container classToAdd={flexClass}>
          <div className="header-moto">
            <h1 id="floating-request-anchor">
              Professional electricians in Utah
            </h1>
            <p>
              We understand that electrical issues can be stressful,
              time-consuming, and costly. That's why we've created a service
              dedicated to connecting you with the best plumbers in state,
              making your life easier. Don't let plumbing problems dampen your
              day.
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
