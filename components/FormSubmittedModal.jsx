import Popup from "reactjs-popup";
import "../stylesheets/FormSubmittedModal.scss";

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
