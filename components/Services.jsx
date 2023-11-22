import "../stylesheets/Services.scss";
import Container from "./Container";

export default function Services() {
  return (
    <div className="services">
      <Container classToAdd="flex-column">
        <h2>Services we provide</h2>
        <div className="serv-block">
          <div>
            <h3>Electrical Installations</h3>
            <p>
              Our electricians are responsible for installing various electrical
              components, such as wiring, switches, outlets, circuit breakers,
              and lighting fixtures. They also can involve installing additional
              electrical outlets, upgrading circuit breakers or fuse boxes, or
              rewiring to support new appliances or technology. You may be
              ensured that these installations comply with local electrical
              codes and safety standards.{" "}
            </p>
          </div>
          <img src="../images/serv-install.svg" />
        </div>
        <div className="serv-block">
          <img src="../images/serv-repair.svg" />
          <div>
            <h3>Electrical Repairs & Replacement</h3>
            <p>
              We diagnose problems, such as power outages, faulty wiring,
              malfunctioning outlets, or circuit breaker trips, and implement
              appropriate solutions to restore electrical functionality. Our
              electricians adhere to safety protocols and electrical codes to
              mitigate potential hazards and ensure electrical systems meet
              regulatory requirements. They use specialized tools and equipment
              to perform their work safely, following proper grounding and
              insulation practices.
            </p>
          </div>
        </div>
        <h4>And More...</h4>
      </Container>
    </div>
  );
}
