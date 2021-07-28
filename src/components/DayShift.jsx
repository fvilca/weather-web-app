import React from 'react'
import './day-shift.scss'


const DayShiftWidget = () => {

    return (
        <div className="day-shift-widget">
            <WeatherCard label='Mañana' temp='25' />
            <WeatherCard label='Tarde' temp='18' />
            <WeatherCard label='Noche' temp='20' />
        </div>
    )
}

const WeatherCard = ({ label, temp, svg }) => {
    return (
        <div className="weather-card-container">
            <div className="background-widget"></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128.54"
                height="129.845"
                viewBox="0 0 128.54 129.845">
                <defs>
                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" fx="0.7463607788085938" fy="0.5397146344184875" r="0.498" gradientTransform="translate(-0.005) scale(1.01 1)" gradientUnits="objectBoundingBox">
                        <stop offset="0.216" stop-color="#fddb4b" />
                        <stop offset="0.329" stop-color="#fdd84b" />
                        <stop offset="0.437" stop-color="#fcd14b" />
                        <stop offset="0.543" stop-color="#fac44c" />
                        <stop offset="0.647" stop-color="#f8b14b" />
                        <stop offset="0.696" stop-color="#f6a54a" />
                    </radialGradient>
                </defs>
                <path id="_62-2_2_" d="M141.822,58.782A40.02,40.02,0,1,1,101.8,98.8,40.017,40.017,0,0,1,141.822,58.782Zm0-24.622a3.085,3.085,0,0,1,3.079,3.079v9.238a3.079,3.079,0,1,1-6.159,0V37.239A3.085,3.085,0,0,1,141.822,34.16ZM80.259,95.723H89.5a3.079,3.079,0,0,1,0,6.159H80.259a3.079,3.079,0,1,1,0-6.159Zm20.551-42.29,6.159,6.159a3.082,3.082,0,1,1-4.358,4.358l-6.159-6.159a3.082,3.082,0,0,1,4.358-4.358Zm82.022,0-6.159,6.159a3.082,3.082,0,0,0,4.358,4.358l6.159-6.159a3.082,3.082,0,0,0-4.358-4.358Zm-82.022,90.726L106.97,138a3.082,3.082,0,1,0-4.358-4.358L96.453,139.8a3.082,3.082,0,0,0,4.358,4.358ZM193.4,95.814h9.238a3.079,3.079,0,1,1,0,6.159H193.4a3.079,3.079,0,0,1,0-6.159ZM180.158,132.78l6.159,6.159a3.082,3.082,0,1,1-4.358,4.358l-6.159-6.159a3.082,3.082,0,0,1,4.358-4.358Zm-38.245,15.828a3.085,3.085,0,0,1,3.079,3.079v9.238a3.079,3.079,0,1,1-6.159,0v-9.238A3.085,3.085,0,0,1,141.913,148.608Z" transform="translate(-77.18 -34.16)" fill-rule="evenodd" fill="url(#radial-gradient)" />
            </svg>

            <span >{temp}<span>°</span>  </span>
            <p>{label}</p>
        </div>
    )
}



export default DayShiftWidget
