import React, { useState } from 'react'
import "./hours.scss";
import { useSpring, a, useTransition, config } from 'react-spring'
import LineChart from '../../components/LineChart'


const dataHoursDay = [
    { hour: "6:00", temp: 10, icon: "sunny", strokeSettings: {
        stroke: '#939482',
    }, },
    { hour: "7:00", temp: 11, icon: "sunny" },
    { hour: "8:00", temp: 11, icon: "cloudy_n" },
    { hour: "9:00", temp: 14, icon: "cloudy_d" },
    { hour: "10:00", temp: 14, icon: "cloudy_n" },
    { hour: "11:00", temp: 14, icon: "sunny" },
    { hour: "12:00", temp: 16, icon: "sunny" },
    { hour: "13:00", temp: 16, icon: "cloudy_d" },
    { hour: "14:00", temp: 17, icon: "cloudy_d" },
    { hour: "15:00", temp: 15, icon: "cloudy_d" },
    { hour: "16:00", temp: 14, icon: "sunny" },
    { hour: "17:00", temp: 15, icon: "sunny" }
];
const dataHoursNight = [
    { hour: "18:00", temp: 12, icon: "cloudy_n", strokeSettings: {
        stroke: '#3c423a',
    }, },
    { hour: "19:00", temp: 10, icon: "cloudy_n" },
    { hour: "20:00", temp: 8, icon: "cloudy_n" },
    { hour: "21:00", temp: 8, icon: "cloudy_n" },
    { hour: "22:00", temp: 8, icon: "cloudy_n" },
    { hour: "23:00", temp: 6, icon: "cloudy_n" },
    { hour: "24:00", temp: 6, icon: "cloudy_n" },
    { hour: "01:00", temp: 6, icon: "cloudy_d" },
    { hour: "02:00", temp: 6, icon: "cloudy_d" },
    { hour: "03:00", temp: 6, icon: "cloudy_d" },
    { hour: "04:00", temp: 7, icon: "sunny" },
    { hour: "05:00", temp: 7, icon: "sunny" },
];

export const Hours = () => {

    const [turn, setTurn] = useState(false)
    const spring = useSpring({ x: turn ? 0 : 30 })
    const spring2 = useSpring({ opacity: turn ? 0 : 1 })
    const spring3 = useSpring({ x: 30, opacity: turn ? 1 : 0 })
    const transition = useTransition(turn, {
        from: { opacity: 0, x: turn ? 40 : -40 },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: 0 },
        config: { config: config.default },
        //delay:1000,
    })
    const handleTurnTime = () => {
        setTurn(!turn)
    }

    const style = {}
    return (
        <div className='container--hours'>

            <LineChart dataHoursDay = {dataHoursDay} dataHoursNight={dataHoursNight}/>

            <div onClick={handleTurnTime} className="bi--option--container">
                <a.div className="bi--option--circle" style={spring}></a.div>
                <a.div style={spring3} className="option--day"></a.div>
                <a.div style={spring2} className="option--night"></a.div>
            </div>

            <div className='title--hours'>
                {transition(
                    (style, visible) => (
                        visible
                            ? <a.div className='title--text' style={style} > Temperatura Dia:<p> &nbsp; 6h a 17h</p></a.div>
                            : <a.div className='title--text' style={style} > Temperatura Noche:<p> &nbsp; 18h a 5h</p></a.div>
                    )
                )}
            </div>

            <div className="transition--hours--container">
                {transition(
                    (style, visible) => (
                        visible
                            ? <TempByHours style={style} data={dataHoursDay} title='Dia' />
                            : <TempByHours style={style} data={dataHoursNight} title='Noche' />
                    )
                )}
            </div>
        </div>
    )
}

const TempByHours = ({ style, data, title }) => {
    return (
        <a.div className='rows' style={style}>

            {data.map((item, index) => (
                <div className="row" key={index}>
                    <span className=" hour list--temp--text">{item.hour}</span>
                    <img
                        className="icon"
                        src={require("../../images/" + item.icon + "_outline.svg").default}
                        alt=""
                    />
                    <span className=" temp list--temp--text">

                        {item.temp}°
                    </span>

                    <br />
                </div>
            ))}
        </a.div>
    );
};
