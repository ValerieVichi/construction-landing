import "../stylesheets/RequestEstimateBtn.css";

export default function RequestEstimateBtn({ btnFontSize, marginTop }) {
  return (
    <a href="#request-anchor">
      <button
        className="estimate-btn"
        style={{
          fontSize: btnFontSize,
          marginTop: marginTop,
          // border: "1px solid black",
        }}
      >
        REQUEST AN ESTIMATE
      </button>
    </a>
  );
}
