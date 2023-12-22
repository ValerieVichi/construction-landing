import useVersionPath from "../hooks/useVersionPath";
export default function City({ cityName }) {
  const baseURL = useVersionPath();
  return (
    <div className="single-city" id="single-city">
      <img src={`${baseURL}/pin-fs8.png`} alt="city pin" />
      <p>{cityName}</p>
    </div>
  );
}
