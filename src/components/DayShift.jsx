import React from 'react'
import './day-shift.scss'

const DayShiftWidget = () => {

    return (
        <div className="day-shift-widget">
                <WeatherCard label='Mañana' temp='25' svg ='cloudy_d' />
            <WeatherCard label='Tarde' temp='18' svg ='sunny'/>
            <WeatherCard label='Noche' temp='20' svg ='cloudy_n' />
        </div>
    )
}

const WeatherCard = ({ label, temp, svg }) => {
    return (
        <div className="weather-card-container">
            <div className="background-widget"></div>
            <img src={require('../images/' + svg+'.svg').default} alt='' />
            <span >{temp}<span>°</span>  </span>
            <p>{label}</p>
        </div>
    )
}



export default DayShiftWidget
