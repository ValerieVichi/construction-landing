import AboutHeader from "../components/AboutHeader";
import Cities from "../components/Cities";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useMedia } from "../hooks/useMedia";
import ClickRequest from "../components/ClickRequest";
import FloatingRequest from "../components/FloatingRequest";

export default function About() {
  const floatingIsActive = useMedia("(max-width: 900px)");
  return (
    <>
      <Menu requestAnchor="#make-request-ab" />
      <AboutHeader />
      <Cities />
      <Footer />
      <ClickRequest requestAnchor={"#make-request-ab"} needToCloseMenu={false}>
        {floatingIsActive ? <FloatingRequest /> : null}
      </ClickRequest>
    </>
  );
}
