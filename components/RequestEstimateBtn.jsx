import "../stylesheets/RequestEstimateBtn.css";

export default function RequestEstimateBtn({
  btnFontSize,
  marginTop,
  btnBorder,
  requestAnchor,
}) {
  return (
    <a href={requestAnchor}>
      <button
        className="estimate-btn"
        style={{
          fontSize: btnFontSize,
          marginTop: marginTop,
          border: btnBorder,
        }}
      >
        REQUEST AN ESTIMATE
      </button>
    </a>
  );
}
