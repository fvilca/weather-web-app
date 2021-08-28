import "./home_page.scss";
import TempWidget from "../components/WidgetTemp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CityFilter from "./../components/CityFilter";
import DateFilter from "../components/DateFilter";
import { RatioWidget1, RatioWidget2 } from "../components/RatioWidget";
import DayShiftWidget from "../components/DayShift";
import WeatherSlider from "../components/WeatherSlider";

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
  { hour: "0:00", temp: "-14", icon: "sunny" },
  { hour: "0:00", temp: "-14", icon: "sunny" },
  { hour: "0:00", temp: "-14", icon: "sunny" },
];

export default function HomePage() {
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
      <CityFilter />

      <DayShiftWidget />
      <RatioWidget1 />
      <RatioWidget2 />

      <section id="sectionhours">
        <h1>24 Horas del dia</h1>

        {dataHoursDay.map((item,index) => (
          <>
            <span>{index}:00</span>
            <span>{item.temp}</span>
            <img
              src={
                require("../images/" + item.icon + "_outline.svg").default
              }
              alt=""
            />
            <br />
          </>
        ))}
      </section>
      <section id="sectioncities">Ciudades</section>
    </div>
  );
}
