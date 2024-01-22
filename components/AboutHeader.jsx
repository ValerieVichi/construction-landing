import "../stylesheets/AboutHeader.scss";
import Container from "./Container";
import { useMedia } from "../hooks/useMedia";
import RequestEstimateBtn from "./RequestEstimateBtn";
import useVersionText from "../hooks/useVersionText";
import useVersionPath from "../hooks/useVersionPath";

export default function AboutHeader() {
  const flexDirectionChange = useMedia("(max-width: 900px)");
  const flexClass = flexDirectionChange
    ? "about-flex-column"
    : "about-flex-row";

  const text = useVersionText();
  const baseURL = useVersionPath();

  return (
    <div className="about-header">
      <Container classToAdd={flexClass}>
        <div className="about-header-moto">
          <h1>{text.header_h}</h1>
          <p>{text.header_p}</p>
          <RequestEstimateBtn
            marginTop="25px"
            btnFontSize="16px"
            requestAnchor="#about-request-anchor"
          />
        </div>
        <div className="about-header-pic">
          <img src={`${baseURL}/about-header-pic-fs8.png`} />
        </div>
      </Container>
    </div>
  );
}
