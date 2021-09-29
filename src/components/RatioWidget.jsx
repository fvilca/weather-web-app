import React from 'react'
import './small-card.scss'

const data = [
    { id: 1, name: 'Clouds', value: '0', unit: '%', icon: 'visibility.svg', arrow: 'arrow-up' },
    { id: 2, name: 'Feels like ', value: '0', unit: '°C', icon: 'air_quality.svg', arrow: 'arrow-down' },
    { id: 3, name: 'Humidity', value: '0', unit: '%', icon: 'precipitation.svg', arrow: 'circle' },
    { id: 4, name: 'Pressure', value: '0', unit: 'hPa', icon: 'pressure.svg', arrow: 'arrow-down' },
    { id: 5, name: 'Wind', value: '0', unit: 'm/s', icon: 'wind.svg', arrow: 'arrow-down' },
    { id: 6, name: 'Pressure', value: '0', unit: 'hPa', icon: 'pressure.svg', arrow: 'arrow-down' },
  ]

export const RatioWidget1 = (props) => {
    return (
        <div className=' ratio-widget ratio-widget1'>
            <SmallCard {...data[0]} value={props.clouds} />
            <SmallCard {...data[1]} value={props.feels_like}/>
            <SmallCard {...data[2]} value={props.humidity}/>
        </div>
    )
}
export const RatioWidget2 = (props) => {
    return (
        <div className=' ratio-widget ratio-widget2'>
            <SmallCard {...data[3]} value={props.pressure} />
            <SmallCard {...data[4]} value={props.wind}/>
            <SmallCard {...data[5]} value={props.pressure}/>
        </div>
    )
}

export default function SmallCard({ icon, name, value, unit, arrow }) {

    return (
        <div className='small-card-wrapper'>
            <div className="wrapper-arrow">
                <div className={arrow} />
            </div>

            <img src={require('../images/' + icon).default} alt='' />
            <div className="ratio">
                <span className="number">{value}</span>
                <span className="unit"> {unit} </span>
            </div>
            <div className="label-card" title={name}>
                {name}
            </div>
        </div>
    )
}

