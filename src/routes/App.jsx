import "../App.scss";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Expert from "../../components/Expert";
import Services from "../../components/Services";
import Cities from "../../components/Cities";
import Footer from "../../components/Footer";
import FloatingRequest from "../../components/FloatingRequest";
import { useMedia } from "../../hooks/useMedia";
import ClickRequest from "../../components/ClickRequest";

export default function App() {
  const floatingIsActive = useMedia("(max-width: 900px)");
  // const floatingRequest = useClickRequest(FloatingRequest(), "#request-anchor");
  return (
    <>
      <Menu requestAnchor={"#request-anchor"} />
      <Header />
      <Expert />
      <Services />
      <Cities />
      <Footer />
      <ClickRequest requestAnchor={"#request-anchor"} needToCLoseMenu="false">
        {floatingIsActive && <FloatingRequest />}
      </ClickRequest>
    </>
  );
}
