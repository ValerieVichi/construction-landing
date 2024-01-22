import AboutHeader from "../../components/AboutHeader";
import Cities from "../../components/Cities";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

export default function About() {
  return (
    <>
      <Menu requestAnchor="#about-request-anchor" />
      <AboutHeader />
      <Cities />
      <Footer />
    </>
  );
}
