import Menu from "../components/Menu";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ScrollToTop from "../components/ScrollToTop";

export default function Privacy() {
  return (
    <>
      <ScrollToTop />
      <Menu
        bottomLineColor="#D9D9D9"
        isPrivacyPage={true}
        requestAnchor={"#make-request"}
      />
      <PrivacyPolicy />
    </>
  );
}
