import Container from "./Container";
import City from "./City";
import "../stylesheets/Cities.scss";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMedia } from "../hooks/useMedia";
import { Carousel } from "react-responsive-carousel";

export default function Cities() {
  const carouselActive = useMedia("(max-width:900px)");

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
      <Container classToAdd={carouselActive && "flex-column"}>
        <p className="cities-starter">ACROSS UTAH</p>
        <h2 className="cities-serve">CITIES WE SERVE</h2>
        {carouselActive ? (
          <Carousel
            showArrows={true}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
          >
            <div className="carousel-block">
              {citiesToServe
                .filter((city, index) => index <= 8)
                .map((city) => {
                  return <City key={city} cityName={city} />;
                })}
            </div>
            <div className="carousel-block">
              {citiesToServe
                .filter((city, index) => index > 8 && index <= 17)
                .map((city) => {
                  return <City key={city} cityName={city} />;
                })}
            </div>
            <div className="carousel-block">
              {citiesToServe
                .filter((city, index) => index > 17 && index <= 26)
                .map((city) => {
                  return <City key={city} cityName={city} />;
                })}
            </div>
            <div className="carousel-block">
              {citiesToServe
                .filter((city, index) => index > 26)
                .map((city) => {
                  return <City key={city} cityName={city} />;
                })}
            </div>
          </Carousel>
        ) : (
          <div className="city-block">
            {citiesToServe.map((city) => {
              return <City key={city} cityName={city} />;
            })}
          </div>
        )}
      </Container>
    </div>
  );
}
