import Container from "./Container";
import "../stylesheets/build/Expert.css";
import useVersionText from "../hooks/useVersionText";
import useVersionClass from "../hooks/useVersionClass";
import useVersionPath from "../hooks/useVersionPath";
import ClickRequest from "./ClickRequest";

export default function Expert() {
  const text = useVersionText();
  const baseURL = useVersionPath();
  return (
    <div className={useVersionClass("expert")}>
      <Container>
        <div className={useVersionClass("expert-block")}>
          {/* <img src="../images/expert-pic-fs8.png"></img> */}
          <img src={`${baseURL}/expert-pic-fs8.png`}></img>
          <div className={useVersionClass("expert-block-text")}>
            <h2>{text.expert_h}</h2>
            <p>{text.expert_p}</p>
            <ClickRequest>
              <button>Get in touch</button>
            </ClickRequest>
          </div>
        </div>
      </Container>
    </div>
  );
}
