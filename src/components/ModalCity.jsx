import React, { useState, useEffect } from "react";
import "./modal.scss";
import "./tag.scss";
import "./search.scss";
import { a } from "react-spring";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const popularCities = "Iquique Guadalajara Cali Beni SaoPaulo Guayaquil".split(
  " "
);

export default function ModalCity({
  style,
  title,
  handleModalVisible,
  setCity,
}) {
  const [inputValue, setInputValue] = useState("");
  const handleSelect = (params) => {
    setInputValue(params);
  };
  const handleClick = async () => {
    const geo = await geocodeByAddress(inputValue);
    const latLng = await getLatLng(geo[0]);
    const newCity = { ...latLng, loc: inputValue };
    setCity(newCity);
    console.log(newCity);
  };

  return (
    <a.div className="modal" style={style}>
      <div className="modal--bg" onClick={handleModalVisible} />
      <form className="form">
        <div>
          <Title />
          <Tags />
          <SearchCity
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSelect={handleSelect}
          />
        </div>
        <ActionButtons
          handleModalVisible={handleModalVisible}
          handleClick={handleClick}
        />
      </form>
    </a.div>
  );
}

const Title = () => {
  return (
    <div className="title">
      <div className="marker--left"></div>
      <h3 className=" filter--title--light"> &nbsp; Filtro: </h3>
      <h3 className=" filter--title--dark"> &nbsp; Por Ciudad </h3>
    </div>
  );
};
const Tags = ({ data }) => {
  return (
    <div className="container--tags">
      {popularCities.map((city, index) => (
        <div key={index} className="tag text--tag">
          {city}
        </div>
      ))}
    </div>
  );
};
const SearchCity = ({ inputValue, setInputValue, handleSelect }) => {
  return (
    <PlacesAutocomplete
      value={inputValue}
      onChange={setInputValue}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="form--search">
          <div className="search--header">
            <input
              {...getInputProps()}
              placeholder="Ingresa un Lugar ..."
              autoFocus
              className="filter-text--dark"
            />
            <img
              className="filter--icon"
              src={require("../images/search.svg").default}
              alt=""
            />
          </div>

          <div className="search--detail">
            {loading && <div>Cargando...</div>}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active item--detail--active"
                : "suggestion-item item--detail";
              const style = suggestion.active
                ? {
                    cursor: "pointer",
                    color: "#3c423a",
                    fontFamily: "Segoe WP bold",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }
                : {
                    cursor: "pointer",
                    color: "#939482",
                    fontFamily: "Segoe WP bold",
                    fontWeight: "bold",
                    fontSize: "24px",
                  };
              return (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
const ActionButtons = ({ handleModalVisible, handleClick }) => {
  return (
    <div className="filter--buttons">
      <svg
        className="button"
        onClick={() => {
          handleClick();
          handleModalVisible();
        }}
        width="59.006"
        height="59.006"
        viewBox="0 0 59.006 59.006"
      >
        <path
          id="Icon_awesome-check-circle"
          data-name="Icon awesome-check-circle"
          d="M59.569,30.066a29.5,29.5,0,1,1-29.5-29.5A29.5,29.5,0,0,1,59.569,30.066ZM26.653,45.687,48.543,23.8a1.9,1.9,0,0,0,0-2.692l-2.692-2.692a1.9,1.9,0,0,0-2.692,0L25.307,36.266l-8.335-8.335a1.9,1.9,0,0,0-2.692,0l-2.692,2.692a1.9,1.9,0,0,0,0,2.692L23.961,45.687a1.9,1.9,0,0,0,2.692,0Z"
          transform="translate(-0.563 -0.563)"
          fill="#160fee"
        />
      </svg>

      <svg
        className="button"
        onClick={handleModalVisible}
        width="59.006"
        height="59.006"
        viewBox="0 0 59.006 59.006"
      >
        <path
          id="Icon_awesome-times-circle"
          data-name="Icon awesome-times-circle"
          d="M30.066.563a29.5,29.5,0,1,0,29.5,29.5A29.5,29.5,0,0,0,30.066.563ZM44.532,37.81a1.429,1.429,0,0,1,0,2.022l-4.711,4.7a1.429,1.429,0,0,1-2.022,0l-7.733-7.8-7.745,7.8a1.429,1.429,0,0,1-2.022,0l-4.7-4.711a1.429,1.429,0,0,1,0-2.022l7.8-7.733-7.8-7.745a1.429,1.429,0,0,1,0-2.022l4.711-4.711a1.429,1.429,0,0,1,2.022,0L30.066,23.4l7.745-7.8a1.429,1.429,0,0,1,2.022,0l4.711,4.711a1.429,1.429,0,0,1,0,2.022l-7.816,7.733Z"
          transform="translate(-0.563 -0.563)"
          fill="#f8183e"
        />
      </svg>
    </div>
  );
};
