import "../stylesheets/FloatingRequest.css";
import useVersionPath from "../hooks/useVersionPath";

export default function FloatingRequest() {
  const baseURL = useVersionPath();
  return (
    <>
      <div className="floating-request">
        <img src={`${baseURL}/floating-request.png`} />
      </div>
    </>
  );
}
