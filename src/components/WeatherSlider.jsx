import React, { useState, useCallback, useEffect } from "react";
import "./weather-slider.scss";
import { a, useTransition, config } from "react-spring";
import { DateTime } from "luxon";
import axios from 'axios'

const data = [
  { icon: "cloudy_d", description: "Nublado parcialmente" },
  { icon: "sunny", description: "Soleado" },
  { icon: "cloudy_n", description: "Nublado parcialmente" },
  { icon: "cloudy_d", description: "Nublado parcialmente" },
  { icon: "sunny", description: "Soleado" },
  { icon: "cloudy_n", description: "Nublado parcialmente" },
  { icon: "cloudy_d", description: "Nublado parcialmente" },
  { icon: "sunny", description: "Soleado" },
  { icon: "cloudy_n", description: "Nublado parcialmente" },
  { icon: "cloudy_d", description: "Nublado parcialmente" },
  { icon: "sunny", description: "Soleado" },
  { icon: "cloudy_n", description: "Nublado parcialmente" },
];

function WeatherSlider ({ loc }){

  const [dates, setDates] = useState([]);
  //console.log('loc: ', loc.latitude, loc.longitude);
  const [bd, setBd] = useState(data);
  const [direction, setDirection] = useState(1);
  const [currentIndex, setcurrentIndex] = useState(1);

  const tSpring = useTransition(currentIndex, {
    from: {
      opacity: 0,
      transform: `translate3d(${direction * -80}%, 0, 0)`,
      scale: 0.5,
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)", scale: 1 },
    leave: {
      opacity: 0,
      transform: `translate3d(${direction * 80}%, 0, 0)`,
      scale: 0.5,
    },
    config: config.gentle,
    //config: { duration: 1000 },
    //trail: 150,
  });

  const nextHandle = useCallback(() => {
    setcurrentIndex((state) => {
      console.log("next:", state);
      return (state + 1) % data.length;
    });

    setDirection(1);
  }, []);

  const prevHandle = () => {
    setcurrentIndex((state) => {
      console.log("prev:", state);
      return (state - 1) % data.length;
    });
    setDirection(-1);
  };
  const buildingListofDates = async (today) => {

    const numDates = 7;
    let arrayDatesUTC = []
    let arrayDatesISO = []
    const initDate = today.minus({ days: 3 })
    for (let index = 0; index < numDates; index++) {
      arrayDatesUTC[index] = parseInt(initDate.plus({ days: index }).toMillis() / 1000).toFixed(0);
      arrayDatesISO[index] = initDate.plus({ days: index }).toISODate()
    }
    console.log(arrayDatesISO)
    console.log(arrayDatesUTC);
    console.log('________________')
    const baseUrl = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&'
    const baseUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&units=metric&'

    const params = `lat=${loc.latitude}&lon=${loc.longitude}`
    const appid = 'appid=5b05fc33f8dcfdc54fbc7f8a22733bfe'

    const request1 = await axios.get(baseUrl + params + '&' + `dt=${arrayDatesUTC[0]}` + '&' + appid)
    const request2 = await axios.get(baseUrl + params + '&' + `dt=${arrayDatesUTC[1]}` + '&' + appid)
    const request3 = await axios.get(baseUrl + params + '&' + `dt=${arrayDatesUTC[2]}` + '&' + appid)
    const request4 = await axios.get(baseUrl2 + params + '&' + appid)

    await axios
      .all([request1, request2, request3, request4])
      .then(axios.spread((...responses) => {
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]
        const response4 = responses[3]

        const temp1 = {
          dt: response1.data.current.dt,
          temp: response1.data.current.temp,
          desc: response1.data.current.weather[0].description,
          main: response1.data.current.weather[0].main,
          icon: response1.data.current.weather[0].icon
        }
        const temp2 = {
          dt: response2.data.current.dt,
          temp: response2.data.current.temp,
          desc: response2.data.current.weather[0].description,
          main: response2.data.current.weather[0].main,
          icon: response2.data.current.weather[0].icon
        }
        const temp3 = {
          dt: response3.data.current.dt,
          temp: response3.data.current.temp,
          desc: response3.data.current.weather[0].description,
          main: response3.data.current.weather[0].main,
          icon: response3.data.current.weather[0].icon
        }
        const temp4 = {
          dt: response4.data.current.dt,
          temp: response4.data.current.temp,
          desc: response4.data.current.weather[0].description,
          main: response4.data.current.weather[0].main,
          icon: response4.data.current.weather[0].icon
        }
        const temp5 = {
          temp: response4.data.daily[0].temp.day,
          dt: response4.data.daily[0].dt,
          desc: response4.data.daily[0].weather[0].description,
          main: response4.data.daily[0].weather[0].main,
          icon: response4.data.daily[0].weather[0].icon
        }
        const temp6 = {
          temp: response4.data.daily[1].temp.day,
          dt: response4.data.daily[1].dt,
          desc: response4.data.daily[1].weather[0].description,
          main: response4.data.daily[1].weather[0].main,
          icon: response4.data.daily[1].weather[0].icon
        }
        const temp7 = {
          temp: response4.data.daily[2].temp.day,
          dt: response4.data.daily[2].dt,
          desc: response4.data.daily[2].weather[0].description,
          main: response4.data.daily[2].weather[0].main,
          icon: response4.data.daily[2].weather[0].icon
        }
        console.log('temp7:', temp7)
        //setDates([...dates, temp1, temp2, temp3, temp4, temp5, temp6, temp7 ])
        setTimeout(() => {
          //setDates([...dates, temp1, temp2, temp3, temp4, temp5, temp6, temp7 ])
          console.log('dates:', dates)
        }, 1000);

      }))
      .catch(errors => console.log('errors:', errors))
  }

  useEffect(() => {
    console.log('----> Slider')
    buildingListofDates(DateTime.now());
    console.log('----> Slider end')
  }, [])

  return (
    <div className="slider">

      <div className="container-spring container-left">
        {tSpring((style, i, j) => {
          return (
            <a.div className="spring--left" style={style}>
              <img
                src={
                  require("../images/" + bd[i - 1].icon + "_outline.svg")
                    .default
                }
                alt=""
              />
              <span
                className="mini-icon--label"
                style={{ textAlign: "center" }}
              >
                Ayer
              </span>
            </a.div>
          );
        })}
      </div>
      <svg
        className="button--svg"
        onClick={prevHandle}
        width="16.728"
        height="28.456"
        viewBox="0 0 16.728 28.456"
      >
        <path
          id="Icon_feather-chevron-left"
          d="M24.192,30.384,13.5,19.692,24.192,9"
          transform="translate(-11 -5.464)"
          fill="none"
          stroke="#939482"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        />
      </svg>
      <div className="container-spring container-middle">
        {tSpring((style, i, j) => {
          return (
            <a.div className="spring--middle" style={style}>
              <img
                src={require("../images/" + bd[i].icon + ".svg").default}
                alt=""
              />
              <span
                className="slider-icon-label"
                style={{ textAlign: "center" }}
              >
                Hoy: Soleado
              </span>
            </a.div>
          );
        })}
      </div>
      <svg
        className="button--svg"
        onClick={nextHandle}
        width="16.728"
        height="28.456"
        viewBox="0 0 16.728 28.456"
      >
        <path
          id="Icon_feather-chevron-left"
          d="M10.692,21.384,0,10.692,10.692,0"
          transform="translate(14.228 24.92) rotate(180)"
          fill="none"
          stroke="#939482"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        />
      </svg>
      <div className="container-spring container-right">
        {tSpring((style, i, j) => {
          return (
            <a.div className="spring--right" style={style}>
              <img
                src={
                  require("../images/" + bd[i + 1].icon + "_outline.svg")
                    .default
                }
                alt=""
              />
              <span
                className="mini-icon--label"
                style={{ textAlign: "center" }}
              >
                Mañana
              </span>
            </a.div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherSlider;
