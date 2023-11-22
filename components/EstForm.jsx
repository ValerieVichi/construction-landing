// import { Form, useSubmit } from "react-router-dom";
import "../stylesheets/EstForm.scss";
import RequestEstimateBtn from "./RequestEstimateBtn";

export default function EstForm({
  border,
  bgColor,
  textColor,
  estimateBtnFontSize,
}) {
  return (
    <form id="est-form">
      <p style={{ color: textColor }}>* Required</p>
      <label>
        <span style={{ color: textColor }}>Your Name</span>
        <span className="red-star"> *</span>
        <input
          style={{ color: textColor, border: border, backgroundColor: bgColor }}
          type="text"
          name="name"
        />
      </label>
      <label>
        <span style={{ color: textColor }}>Phone number or email address</span>
        <span className="red-star"> *</span>
        <input
          style={{ color: textColor, border: border, backgroundColor: bgColor }}
          type="email"
          name="phone or email"
        />
      </label>
      <label>
        <span style={{ color: textColor }}>Your Message</span>
        <span className="red-star"> *</span>
        <textarea
          style={{ color: textColor, border: border, backgroundColor: bgColor }}
          className="msg-text"
          name="msg"
        />
      </label>
      <RequestEstimateBtn marginTop="25px" btnFontSize={estimateBtnFontSize} />
    </form>
  );
}
