import React, { useState, useCallback, useEffect } from "react";
import "./filter.scss";
import { a, useTransition, config } from "react-spring";
import ModalCity from "./ModalCity";

const CityFilter = (props) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const transitionModal = useTransition(visibleModal, {
    from: {
      opacity: 0,
      scale: 0.8,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    leave: {
      opacity: 0,
      scale: 0.8,
    },
    config: config.gentle,
  });
  const handleModalVisible = () => {
    setVisibleModal(!visibleModal);
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && visibleModal) {
        setVisibleModal(false);
      }
    },
    [setVisibleModal, visibleModal]
  );

  useEffect(() => {
    
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className="filter filter--city">
      <div className="filter--container" onClick={handleModalVisible}>
        <svg
          className="filter--icon"
          width="36.856"
          height="36.856"
          viewBox="0 0 36.856 36.856"
        >
          <path
            d="M28.409,23.5a14.576,14.576,0,1,0-4.907,4.9L33.392,38.3l4.9-4.907ZM15.982,24.98a8.992,8.992,0,1,1,9-8.986,9.006,9.006,0,0,1-9,8.986Z"
            transform="translate(-1.44 -1.44)"
            fill="#939482"
          />
        </svg>
        <div className="filter--text">{props.city[0].cityName}, {props.city[0].country}</div>
        <svg
          className="filter--arrow"
          width="21.685"
          height="13.343"
          viewBox="0 0 21.685 13.343"
        >
          <path
            d="M7.307,14.614,0,7.307,7.307,0"
            transform="translate(3.536 10.843) rotate(-90)"
            fill="none"
            stroke="#939482"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      </div>

      {transitionModal(
        (style, visible) =>
          visible && (
            <ModalCity
              style={style}
              title="Por Ciudad"
              handleModalVisible={handleModalVisible}
              setCity={props.city[1]}
            />
          )
      )}
    </div>
  );
};

export default CityFilter;
