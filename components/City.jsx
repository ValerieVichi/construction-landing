export default function City({ cityName }) {
  return (
    <div className="single-city">
      <img src="../images/pin.svg" alt="city pin" />
      <p>{cityName}</p>
    </div>
  );
}
