import Popup from "reactjs-popup";
import "../stylesheets/FormSubmittedModal.scss";

export default function RequestEstimateModal({ isClicked }) {
  return (
    <Popup open={isClicked}>
      <div className="submitted-modal">
        <div className="submitted-modal-content">
          Fill out the this form for request!
        </div>
      </div>
    </Popup>
  );
}
