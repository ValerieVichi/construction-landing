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

  const arrowStyle = {
    width: "32px",
    height: "32px",
    // color: "#D9D9D9",
    color: "#EF5730",
    background: "white",
    borderRadius: "10px",
    position: "absolute",
    zIndex: 2,
    top: "calc(50%-15px)",
    cursor: "pointer",
    boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.10)",
    border: "none",
    padding: "5px",
  };

  return (
    <div className="cities">
      <Container classToAdd={carouselActive && "flex-column"}>
        <p className="cities-starter">ACROSS UTAH</p>
        <h2 className="cities-serve">CITIES WE SERVE</h2>
        {carouselActive ? (
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={true}
            useKeyboardArrows={true}
            width="50%"
            // infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyle, left: 15 }}
                >
                  <img
                    src="../images/carousel-left.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyle, right: 15 }}
                >
                  <img
                    src="../images/carousel-right.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </button>
              )
            }
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
