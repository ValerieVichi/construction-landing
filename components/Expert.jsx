import Container from "./Container";
import "../stylesheets/Expert.scss";

export default function Expert() {
  return (
    <div className="expert">
      <Container>
        <div className="expert-block">
          <img src="../images/expert-pic-fs8.png"></img>
          <div className="expert-block-text">
            <h2>Expert Utah electrical Service, Installation and Repair</h2>
            <p>
              Your safety is our top priority. We follow strict safety protocols
              and adhere to industry standards to provide you with peace of
              mind. You can trust us to handle all your electrical needs with
              professionalism and precision.
            </p>
            <button>Get in touch</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
