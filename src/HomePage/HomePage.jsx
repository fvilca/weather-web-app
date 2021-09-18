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
import { Hours } from "./Sections/Hours";
import useGeoLocation from "../hooks/useGeoLocation";

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`;
const initialPlace = {
  coordinates: { lat: '', lng: '' },
  cityName: '****',
}

export default function HomePage() {

  const city = useState(initialPlace);
  const { pathname, hash } = useLocation();
  const geoLocation = useGeoLocation()


  useEffect(() => {
    city[1](geoLocation)
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
  }, [hash, pathname, geoLocation]); // do this on route change

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
        {geoLocation.loaded && JSON.stringify(geoLocation)}
        <Hours />
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

