import "./home_page.scss";
import TempWidget from "../components/WidgetTemp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CityFilter from "./../components/CityFilter";
import DateFilter from "../components/DateFilter";
import { RatioWidget1, RatioWidget2 } from "../components/RatioWidget";
import DayShiftWidget from "../components/DayShift";
import WeatherSlider from "../components/WeatherSlider";

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
      <DayShiftWidget />
      <RatioWidget1 />
      <RatioWidget2 />
      {/*
    
    <TempWidget />
      <DateFilter />
      <CityFilter />

      


      */}{" "}
      {/** PROBLEM OVERFLOW .*/}
      <section id="sectionhours">24 Horas del dia</section>
      <section id="sectioncities">Ciudades</section>
    </div>
  );
}
