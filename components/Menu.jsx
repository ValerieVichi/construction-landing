import Logo from "./Logo";
import Container from "./Container";
import RequestEstimateBtn from "./RequestEstimateBtn";
import "../stylesheets/Menu.scss";

export default function Menu() {
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
        </div>
      </Container>
    </div>
  );
}
