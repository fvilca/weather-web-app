import TempWidget from "../components/WidgetTemp";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import CityFilter from "./../components/CityFilter";
import DateFilter from "../components/DateFilter";
import { RatioWidget1, RatioWidget2 } from "../components/RatioWidget";
import DayShiftWidget from "../components/DayShift";
import WeatherSlider from "../components/WeatherSlider";
import { Hours } from "./Sections/Hours";
import "./home_page.scss";
import Cities from './Sections/Cities';
import useFetch from '../hooks/useFetch'
import useCurrentLocation from '../hooks/useCurrentLocation'
import { geolocationOptions } from '../constants/geolocationOptions'
const initialCity = {
  lat: '',
  lng: '',
  cityName: '',
  loaded: false,
}
export default function HomePage() {
  // ! HOOKS
  //const selectLocation = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)
  const { pathname, hash } = useLocation();
  const { location: currentLocation, setLocation: setLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const mapRef = useRef();
  // ! GETS
  const getWeatherByCoords = async (currentLocation) => {
    console.log('0:')
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const params = `?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric`;
    const appid = "&appid=5b05fc33f8dcfdc54fbc7f8a22733bfe";
    if (currentLocation) {
      const response = await fetch(baseUrl + params + appid);
      if (response.status === 200) {
        const data = await response.json();
        const weather = { ...data.main, wind: data.wind.speed, clouds: data.clouds.all, name: data.name, country: data.sys.country };
        setCurrentWeather(weather);
        console.log(' HomePage:weather::', weather);
      } else {
        setCurrentWeather(null);
      }
    }
  }
  const getStates = async (country) => {
    var requestStateOptions = {
      method: 'GET',
      headers: {
        "accept": "application/json",
        "X-CSCAPI-KEY": "Z2hCOG5ZcTUyWHk2TEJaQUdtcjFnU1R4UEhYYkdGeWFaRmtJbDZrWA==",
      }
    }
    const apiUrl = "https://api.countrystatecity.in/v1/countries/";
    let respState = await fetch(apiUrl + country + "/states", requestStateOptions);
    let statesdata = await respState.json();
    console.log('states:', statesdata);
  }

  useEffect(() => {
    currentLocation && getWeatherByCoords(currentLocation)
    //getStates('PE')
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
  }, [hash, pathname, currentLocation]); // do this on route change

  return (
    <div className="home-page">
      <WeatherSlider />
      {currentWeather && <TempWidget temp={Math.round(currentWeather.temp)} />}
      <DateFilter />
      {currentWeather && <CityFilter
        city={currentWeather.name}
        country={currentWeather.country}
        setLocation={setLocation} 
        mapRef={mapRef}/>}
      <DayShiftWidget />
      <RatioWidget1 {...currentWeather} />
      <RatioWidget2 {...currentWeather} />

      <section id="sectionhours">
        <Hours />
      </section>

      <section id="sectioncities">
        {currentLocation && <Cities location={currentLocation} mapRef={mapRef} />}
      </section>
    </div>
  );
}

