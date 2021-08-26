import React from "react";
import "./modal.scss";
import { a} from "react-spring";

export default function ModalDate({ style,title, handleModalVisible }) {
  return (
    <a.div className="modal" style = {style}>
      <div className="modal--bg" onClick={handleModalVisible} />
      <form className="form">
        
        <div className="title">
          <div className="marker--left"></div>
          <h3 className=" filter--title--light"> &nbsp; Filtro: </h3>
          <h3 className=" filter--title--dark"> Por Fecha </h3>
        </div>

        <DateSelector />

        <div className="filter--buttons">
          <svg
            className="button"
            xmlns="http://www.w3.org/2000/svg"
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
            className="button"  onClick={handleModalVisible}
            xmlns="http://www.w3.org/2000/svg"
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
      </form>
    </a.div>
  );
}

const DateSelector = () => {
  return (
    <div className="date">
      <svg
        className="filter--icon--modal"
        width="39.553"
        height="43.948"
        viewBox="0 0 39.553 43.948"
      >
        <path
          d="M17.684,22.777H13.29v4.395h4.395Zm8.79,0H22.079v4.395h4.395Zm8.79,0H30.869v4.395h4.395ZM39.658,7.395h-2.2V3H33.066V7.395H15.487V3H11.092V7.395h-2.2A4.375,4.375,0,0,0,4.522,11.79L4.5,42.553a4.394,4.394,0,0,0,4.395,4.395H39.658a4.408,4.408,0,0,0,4.395-4.395V11.79A4.408,4.408,0,0,0,39.658,7.395Zm0,35.158H8.895V18.382H39.658Z"
          transform="translate(-4.5 -3)"
          fill="#939482"
        />
      </svg>
      <Combo3 options={[]} value="23" />
      <Combo3 options={[]} value="May" />
      <Combo3 options={[]} value="2021" />
    </div>
  );
};

const Combo3 = ({ options, value }) => {
  return (
    <div className="combo--bg">
      <svg width="20.896" height="12.948" viewBox="0 0 20.896 12.948">
        <path
          d="M6.912,13.825,0,6.912,6.912,0"
          transform="translate(17.36 2.5) rotate(90)"
          fill="none"
          stroke="#3c423a"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </svg>

      <div className=" filter-text date--bg">{value}</div>
      <svg width="20.896" height="12.948" viewBox="0 0 20.896 12.948">
        <path
          d="M6.912,0,0,6.912l6.912,6.912"
          transform="translate(3.536 10.448) rotate(-90)"
          fill="none"
          stroke="#3c423a"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </svg>
    </div>
  );
};
