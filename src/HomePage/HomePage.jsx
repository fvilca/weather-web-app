import React from 'react'
import TempWidget from "../components/WidgetTemp";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CityFilter from "./../components/CityFilter";
import DateFilter from "../components/DateFilter";
import { RatioWidget1, RatioWidget2 } from "../components/RatioWidget";
import DayShiftWidget from "../components/DayShift";
import WeatherSlider from "../components/WeatherSlider";
import { Hours } from "./Sections/Hours";
import useGeoLocation from "../hooks/useGeoLocation";
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

  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);

  // ! HOOKS
  const city = useState(initialCity);
  const [currentWeather, setCurrentWeather] = useState(null)
  
  const { pathname, hash } = useLocation();

  const [loading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);

  /*const [id, setId] = useState(1)
  const { loading2, error2, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )*/
  // ! GETS
  const getWeather = async (city) => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const suffix = "&units=metric&appid=5b05fc33f8dcfdc54fbc7f8a22733bfe";
    const appid = "&appid=5b05fc33f8dcfdc54fbc7f8a22733bfe";
    if (city) {
      const response = await fetch(baseUrl + city + suffix);
      if (response.status === 200) {
        const data = await response.json();
        const weather = { ...data.main, wind: data.wind.speed, clouds: data.clouds.all };
        setCurrentWeather(weather);
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
    //getWeather(city[0].cityName)

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

  const lat = Math.round(city[0].lat)
  const lng = Math.round(city[0].lng)
  const cityName = city[0].cityName
  return (
    <div className="home-page">
      {/*<WeatherSlider />
      {currentWeather && <TempWidget temp={Math.round(currentWeather.temp)} />}
      <DateFilter />
      {!loading ? <CityFilter city={city} /> : 'Cargando datos de Ciudad'}
      <DayShiftWidget />
      <RatioWidget1 {...currentWeather} />
      <RatioWidget2 {...currentWeather} />
      */}
      <section id="sectionhours">
        <Hours />
      </section>
      
      <section id="sectioncities">
        <Cities location={currentLocation} />
      </section>
    </div>
  );
}

