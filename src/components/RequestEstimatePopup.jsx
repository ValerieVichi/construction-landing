import Popup from "reactjs-popup";
import "../stylesheets/build/FormSubmittedModal.css";
import PropTypes from "prop-types";

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

RequestEstimateModal.propTypes = {
  isClicked: PropTypes.bool,
};
