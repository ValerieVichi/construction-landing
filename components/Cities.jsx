import Container from "./Container";
import City from "./City";
import "../stylesheets/Cities.scss";

export default function Cities() {
  const citiesToServe = [
    "Alpine",
    "American Fork",
    "Bluffdale",
    "Bountiful",
    "Cedar Hills",
    "Draper",
    "Eagle Mountain",
    "Farmington",
    "Grantsville",
    "Holladay",
    "Heber City",
    "Herriman",
    "Lehi",
    "Magna",
    "Kamas",
    "Kaysville",
    "Midvale",
    "Midway",
    "Millcreek",
    "Murray",
    "North Salt Lake",
    "Oakley",
    "Orem",
    "Park City",
    "Riverton",
    "Salt Lake City",
    "Sandy",
    "Saratoga Springs",
    "South Jordan",
    "South Salt Lake",
    "Taylorsville",
    "Tooele",
    "West Bountiful",
    "West Jordan",
    "West Valley City",
    "Woods Cross",
  ];
  return (
    <div className="cities">
      <div className="cities-dark">
        <Container>
          <p className="cities-starter">ACROSS UTAH</p>
          <h2 className="cities-serve">CITIES WE SERVE</h2>
          <div className="city-block">
            {citiesToServe.map((city) => {
              return <City key={city} cityName={city} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}
