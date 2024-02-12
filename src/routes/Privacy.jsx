import Menu from "../components/Menu";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function Privacy() {
  return (
    <>
      <Menu
        bottomLineColor="#D9D9D9"
        isPrivacyPage={true}
        requestAnchor={"#make-request"}
      />
      <PrivacyPolicy />
    </>
  );
}
