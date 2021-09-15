import React, { useState } from 'react'
import "./hours.scss";
import { useSpring, a, useTransition, config } from 'react-spring'


const dataHoursDay = [
    { hour: "0:00", temp: "12", icon: "sunny" },
    { hour: "0:00", temp: "13", icon: "sunny" },
    /*{ hour: "0:00", temp: "14", icon: "cloudy_n" },
    { hour: "0:00", temp: "16", icon: "cloudy_d" },
    { hour: "0:00", temp: "18", icon: "cloudy_n" },
    { hour: "0:00", temp: "24", icon: "sunny" },
    { hour: "0:00", temp: "14", icon: "sunny" },
    { hour: "0:00", temp: "14", icon: "cloudy_d" },
    { hour: "0:00", temp: "14", icon: "cloudy_d" },
    { hour: "0:00", temp: "14", icon: "cloudy_d" },
    { hour: "0:00", temp: "14", icon: "sunny" },
    { hour: "0:00", temp: "14", icon: "sunny" },*/
];
const dataHoursNight = [
    { hour: "0:00", temp: "-12", icon: "cloudy_n" },
    { hour: "0:00", temp: "-14", icon: "cloudy_n" },
    { hour: "0:00", temp: "-14", icon: "cloudy_n" },
    { hour: "0:00", temp: "-14", icon: "cloudy_d" },
    /*{ hour: "0:00", temp: "-14", icon: "cloudy_n" },
    { hour: "0:00", temp: "-14", icon: "sunny" },
    { hour: "0:00", temp: "-14", icon: "sunny" },
    { hour: "0:00", temp: "-14", icon: "cloudy_d" },
    { hour: "0:00", temp: "-14", icon: "cloudy_d" },
    { hour: "0:00", temp: "-14", icon: "cloudy_d" },
    { hour: "0:00", temp: "-14", icon: "sunny" },
    { hour: "0:00", temp: "-14", icon: "sunny" },*/
];

export const Hours = () => {

    const [turn, setTurn] = useState(false)
    const spring = useSpring({ x: turn ? 0 : 30 })
    const spring2 = useSpring({ opacity: turn ? 0 : 1 })
    const spring3 = useSpring({ x: 30, opacity: turn ? 1 : 0 })
    const transition = useTransition(turn, {
        from: { opacity: 0, x:turn?40:-40},
        enter: { opacity: 1, x:0 },
        leave: { opacity: 0, x:0},
        config: { config: config.default },
        //delay:1000,
    })
    const handleTurnTime = () => {
        setTurn(!turn)
    }

    const style = {}
    return (
        <div className='container--hours'>
            <div onClick={handleTurnTime} className="bi--option--container">
                <a.div className="bi--option--circle" style={spring}></a.div>
                <a.div style={spring3} className="option--day"></a.div>
                <a.div style={spring2} className="option--night"></a.div>
            </div><br />
            <div className="transition--hours--container">
                {transition(
                    (style, visible) => (
                        visible
                            ? <TempByHours style={style} data={dataHoursDay} />
                            : <TempByHours style={style} data={dataHoursNight} />
                    )
                    )}
            </div>
            {/*transition(
                (style, visible) => (
                    !visible&&
                         //<TempByHours style={style} data={dataHoursDay} />
                        <TempByHours  style={style} data={dataHoursNight} />
                )
                )*/}

        </div>
    )
}

const TempByHours = ({ style, data }) => {
    return (
        <a.div className='rows' style={style}>
            {data.map((item, index) => (
                <div className="row" key={index}>
                    <span className=" hour list--temp--text">{index}:00</span>
                    <span className=" temp list--temp--text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17.431"
                            height="40"
                            viewBox="0 0 17.431 40"
                        >
                            <g id="temperature" transform="translate(-67.73)">
                                <path
                                    id="Trazado_1211"
                                    data-name="Trazado 1211"
                                    d="M81.725,23.542V5.555a5.286,5.286,0,1,0-10.559,0V23.542a9.312,9.312,0,0,0-3.436,7.286,8.727,8.727,0,1,0,17.431,0A9.313,9.313,0,0,0,81.725,23.542ZM76.445,37.6a6.619,6.619,0,0,1-6.436-6.773,6.853,6.853,0,0,1,2.921-5.664,1.217,1.217,0,0,0,.515-1V5.555a3,3,0,1,1,6,0V24.162a1.216,1.216,0,0,0,.515,1,6.854,6.854,0,0,1,2.921,5.664A6.619,6.619,0,0,1,76.445,37.6Z"
                                    transform="translate(0)"
                                    fill="#313827"
                                />
                                <path
                                    id="Trazado_1212"
                                    data-name="Trazado 1212"
                                    d="M104.8,77.648V63.495a1.071,1.071,0,0,0-2.142,0V77.648a3.56,3.56,0,1,0,2.142,0Z"
                                    transform="translate(-27.279 -49.235)"
                                    fill="#313827"
                                />
                            </g>
                        </svg>
                        {item.temp}°
                    </span>
                    <img
                        className="icon"
                        src={require("../../images/" + item.icon + "_outline.svg").default}
                        alt=""
                    />
                    <br />
                </div>
            ))}
        </a.div>
    );
};
