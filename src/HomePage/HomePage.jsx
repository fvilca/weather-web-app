import "./home_page.scss";
import TempWidget from "../components/WidgetTemp";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CityFilter from "./../components/CityFilter";
import DateFilter from "../components/DateFilter";
import { RatioWidget1, RatioWidget2 } from "../components/RatioWidget";
import DayShiftWidget from "../components/DayShift";
import WeatherSlider from "../components/WeatherSlider";
import MapContainer from "./Sections/MapContainer";


const dataHoursDay = [
  { hour: "0:00", temp: "-14", icon: "sunny" },
  { hour: "0:00", temp: "-14", icon: "cloudy_d" },
  { hour: "0:00", temp: "-14", icon: "cloudy_n" },
  { hour: "0:00", temp: "-14", icon: "cloudy_d" },
  { hour: "0:00", temp: "-14", icon: "cloudy_n" },
  { hour: "0:00", temp: "-14", icon: "sunny" },
  { hour: "0:00", temp: "-14", icon: "sunny" },
  { hour: "0:00", temp: "-14", icon: "cloudy_d" },
  { hour: "0:00", temp: "-14", icon: "cloudy_d" },
  { hour: "0:00", temp: "-14", icon: "cloudy_d" },
  { hour: "0:00", temp: "-14", icon: "cloudy_d" },
  { hour: "0:00", temp: "-14", icon: "sunny" },
  { hour: "0:00", temp: "-14", icon: "sunny" },
];
const {REACT_APP_GOOGLE_MAPS_API_KEY} = process.env;
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`;

const initialPlace= { loc:'Arequipa', lng:0, lat:0}

export default function HomePage() {

  const city = useState('Arequipa, PE...');
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      //setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      //}, 0);*/
    }
  }, [hash, pathname]); // do this on route change

  return (
    <div className="home-page">
      <WeatherSlider />
      <TempWidget />
      <DateFilter />
      <CityFilter city={city} />

      <DayShiftWidget />
      <RatioWidget1 />
      <RatioWidget2 />

      <section id="sectionhours">
        <TempByHours />
      </section>
      <section id="sectioncities">
        {/*<MapContainer
          googleMapURL={mapURL}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          loadingElement={<div>Cargando Mapa</div>}
        />*/}
      </section>
    </div>
  );
}

const TempByHours = () => {
  return (
    <>
      <h1>24 Horas del dia</h1>

      {dataHoursDay.map((item, index) => (
        <div className="row" key={index}>
          <span className="list--temp--text">{index}:00</span>
          <span className="list--temp--text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.431"
              height="40"
              viewBox="0 0 17.431 40"
            >
              <g id="temperature" transform="translate(-67.73)">
                <path
                  id="Trazado_1211"
                  data-name="Trazado 1211"
                  d="M81.725,23.542V5.555a5.286,5.286,0,1,0-10.559,0V23.542a9.312,9.312,0,0,0-3.436,7.286,8.727,8.727,0,1,0,17.431,0A9.313,9.313,0,0,0,81.725,23.542ZM76.445,37.6a6.619,6.619,0,0,1-6.436-6.773,6.853,6.853,0,0,1,2.921-5.664,1.217,1.217,0,0,0,.515-1V5.555a3,3,0,1,1,6,0V24.162a1.216,1.216,0,0,0,.515,1,6.854,6.854,0,0,1,2.921,5.664A6.619,6.619,0,0,1,76.445,37.6Z"
                  transform="translate(0)"
                  fill="#313827"
                />
                <path
                  id="Trazado_1212"
                  data-name="Trazado 1212"
                  d="M104.8,77.648V63.495a1.071,1.071,0,0,0-2.142,0V77.648a3.56,3.56,0,1,0,2.142,0Z"
                  transform="translate(-27.279 -49.235)"
                  fill="#313827"
                />
              </g>
            </svg>
            {item.temp}°
          </span>
          <img
            className="icon"
            src={require("../images/" + item.icon + "_outline.svg").default}
            alt=""
          />
          <br />
        </div>
      ))}
    </>
  );
};
