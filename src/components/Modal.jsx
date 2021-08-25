import React from "react";

export default function ModalDate({ title }) {
  return (
    <div className="modal">
      <div className="modal--bg" onClick={handleModalVisible}>
        bg
      </div>
      <form className="form">
        <h1 className="title">
          <span className="title filter--title--light"> Filtro: </span>
          <span className="title filter--title--dark"> Por Fecha </span>
        </h1>

        <div className="date">
          <div>
            <svg
              className="filter--icon"
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
          </div>
          <div className="filter-text">23</div>
          <div className="filter-text">May</div>
          <div className="filter-text">2021</div>
        </div>
      </form>
    </div>
  );
}
