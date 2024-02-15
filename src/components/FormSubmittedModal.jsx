import Popup from "reactjs-popup";
import "../stylesheets/build/FormSubmittedModal.css";
import PropTypes from "prop-types";

export default function FormSubmittedModal({ isFormSubmitted }) {
  return (
    <Popup open={isFormSubmitted} modal nested>
      <div className="submitted-modal">
        <div className="submitted-modal-content">
          Thank you! Your request was Submitted!
        </div>
      </div>
    </Popup>
  );
}

FormSubmittedModal.propTypes = {
  isFormSubmitted: PropTypes.bool,
};
