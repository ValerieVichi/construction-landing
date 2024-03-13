import "../App.scss";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Expert from "../components/Expert";
import Services from "../components/Services";
import Cities from "../components/Cities";
import Footer from "../components/Footer";
import FloatingRequest from "../components/FloatingRequest";
import { useMedia } from "../hooks/useMedia";
import ClickRequest from "../components/ClickRequest";
import ScrollToTop from "../components/ScrollToTop";

export default function App() {
  const floatingIsActive = useMedia("(max-width: 900px)");
  return (
    <>
      <ScrollToTop />
      <Menu requestAnchor={"#make-request"} />
      <Header />
      <Expert />
      <Services />
      <Cities />
      <Footer />
      <ClickRequest requestAnchor={"#make-request"} needToCloseMenu={false}>
        {floatingIsActive ? <FloatingRequest /> : null}
      </ClickRequest>
    </>
  );
}
