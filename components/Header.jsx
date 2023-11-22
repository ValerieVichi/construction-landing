import "../stylesheets/_Header.scss";
import Container from "./Container";
import EstForm from "./EstForm";

export default function Header() {
  return (
    <div className="header">
      <div className="header-bckgr">
        <Container classToAdd="flex-row">
          <div className="header-moto">
            <h1>Professional electricians in Utah</h1>
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
