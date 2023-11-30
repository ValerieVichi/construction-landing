export default function City({ cityName }) {
  return (
    <div className="single-city" id="single-city">
      <img src="../images/pin-fs8.png" alt="city pin" />
      <p>{cityName}</p>
    </div>
  );
}
