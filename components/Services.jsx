import "../stylesheets/Services.scss";
import Container from "./Container";
import useVersionText from "../hooks/useVersionText";
import useVersionPath from "../hooks/useVersionPath";
import useVersionClass from "../hooks/useVersionClass";

export default function Services() {
  const text = useVersionText();
  const baseURL = useVersionPath();
  return (
    <div className={useVersionClass("services")}>
      <Container classToAdd="flex-column">
        <h2>Services we provide</h2>
        <div className="serv-block" id="serv-top">
          <div>
            <h3>{text.service_install_h}</h3>
            <p>{text.service_install_p}</p>
          </div>
          <img src={`${baseURL}/serv-install-fs8.png`} />
        </div>
        <div className="serv-block">
          <img src={`${baseURL}/serv-repair-fs8.png`} />
          <div>
            <h3>{text.service_repair_h}</h3>
            <p>{text.service_repair_p}</p>
          </div>
        </div>
        <h4>And More...</h4>
      </Container>
    </div>
  );
}
