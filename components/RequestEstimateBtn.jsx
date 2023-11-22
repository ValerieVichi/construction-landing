import "../stylesheets/RequestEstimateBtn.css";

export default function RequestEstimateBtn({ btnFontSize, marginTop }) {
  return (
    <div
      className="estimate-btn"
      style={{
        fontSize: btnFontSize,
        marginTop: marginTop,
      }}
    >
      REQUEST AN ESTIMATE
    </div>
  );
}
