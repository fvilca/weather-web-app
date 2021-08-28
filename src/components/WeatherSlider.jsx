import React, { useState, useCallback } from "react";
import "./weather-slider.scss";
import { a, useTransition, config } from "react-spring";

const data = [
  { icon: "cloudy_d", label: "Nublado parcialmente" },
  { icon: "sunny", label: "Soleado" },
  { icon: "cloudy_n", label: "Nublado parcialmente" },
  { icon: "cloudy_d", label: "Nublado parcialmente" },
  { icon: "sunny", label: "Soleado" },
  { icon: "cloudy_n", label: "Nublado parcialmente" },
  { icon: "cloudy_d", label: "Nublado parcialmente" },
  { icon: "sunny", label: "Soleado" },
  { icon: "cloudy_n", label: "Nublado parcialmente" },
  { icon: "cloudy_d", label: "Nublado parcialmente" },
  { icon: "sunny", label: "Soleado" },
  { icon: "cloudy_n", label: "Nublado parcialmente" },
];

const WeatherSlider = () => {
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

  return (
    <div className="slider">
      <div className="container-spring container-left">
        {tSpring((style, i, j) => {
          return (
            <a.div className="spring--left" style={style}>
              <img
                src={
                  require("../images/" + bd[i -1].icon + "_outline.svg")
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
          data-name="Icon feather-chevron-left"
          d="M24.192,30.384,13.5,19.692,24.192,9"
          transform="translate(-11 -5.464)"
          fill="none"
          stroke="#939482"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </svg>
      <div className="container-spring container-middle">
        {tSpring((style, i, j) => {
          console.log("spring-m:", i);
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
          data-name="Icon feather-chevron-left"
          d="M10.692,21.384,0,10.692,10.692,0"
          transform="translate(14.228 24.92) rotate(180)"
          fill="none"
          stroke="#939482"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </svg>
      <div className="container-spring container-right">
        {tSpring((style, i, j) => {
          console.log("spring-r:", i);
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
