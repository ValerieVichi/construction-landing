import "./App.scss";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Expert from "../components/Expert";
import Services from "../components/Services";
import Cities from "../components/Cities";
import Footer from "../components/Footer";
import FloatingRequest from "../components/FloatingRequest";
import { useMedia } from "../hooks/useMedia";
// import About from "./About";

function App() {
  const floatingIsActive = useMedia("(max-width: 900px)");
  return (
    <>
      <Menu requestAnchor="#request-anchor" />
      <Header />
      <Expert />
      <Services />
      <Cities />
      <Footer />
      {floatingIsActive && <FloatingRequest />}
    </>
  );
  // return <About />;
}

export default App;
