import "../stylesheets/build/Header.css";
// import "../stylesheets/_Header.scss";
import Container from "./Container";
import EstForm from "./EstForm";
import { useMedia } from "../hooks/useMedia";
import useVersionClass from "../hooks/useVersionClass";
import useVersionText from "../hooks/useVersionText";
import useVersion, {
  ELECTRIC_VARIANT,
  PLUMBER_VARIANT,
} from "../hooks/useVersion";

export default function Header() {
  const flexDirectionChange = useMedia("(max-width: 900px)");
  const flexClass = flexDirectionChange ? "flex-column" : "flex-row";

  const text = useVersionText();

  const plumberFormChangeOnSize = useMedia("(max-width: 768px)");
  const version = useVersion();
  const formVersion =
    version === ELECTRIC_VARIANT ||
    (version === PLUMBER_VARIANT && plumberFormChangeOnSize)
      ? {
          border: "1px solid #fff",
          bgColor: "rgba(255, 255, 255, 0.3)",
          textColor: "#fff",
          estimateBtnFontSize: "16px",
        }
      : {
          border: " 1px solid #000",
          bgColor: "rgba(255, 255, 255, 0.3)",
          textColor: "#272727",
          estimateBtnFontSize: "16px",
        };

  return (
    <div className={useVersionClass("header")} id="make-request">
      <div className={useVersionClass("header-bckgr")}>
        <Container classToAdd={flexClass}>
          <div className={useVersionClass("header-moto")}>
            <h1>{text.header_h}</h1>
            <p>{text.header_p}</p>
          </div>
          <div className="header-form">
            <EstForm
              border={formVersion.border}
              bgColor={formVersion.bgColor}
              textColor={formVersion.textColor}
              estimateBtnFontSize={formVersion.estimateBtnFontSize}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
