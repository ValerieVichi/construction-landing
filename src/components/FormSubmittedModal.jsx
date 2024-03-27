import "../stylesheets/build/FormSubmittedModal.css";
import PropTypes from "prop-types";
import useVersionPath from "../hooks/useVersionPath.jsx";

export default function FormSubmittedModal({ isFormSubmitted }) {
  const base = useVersionPath();
  if (!isFormSubmitted) return null;
  return (
    <div className="submitted-modal-cover">
      <div className="submitted-modal">
        <img src={`${base}/submitted.png`} alt="form submitted icon" />
        <div className="submission-received">
          Your submission has been received.
        </div>
      </div>
    </div>
  );
}

FormSubmittedModal.propTypes = {
  isFormSubmitted: PropTypes.bool,
};
