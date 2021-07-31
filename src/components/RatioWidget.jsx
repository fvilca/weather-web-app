import React from 'react'
import './small-card.scss'

const data = [
    { id: 1, name: 'Visibility', value: '5.4', unit: 'km', icon: 'visibility.svg', arrow: 'arrow-up' },
    { id: 2, name: 'Air quality ', value: '147', unit: '', icon: 'air_quality.svg', arrow: 'arrow-down' },
    { id: 3, name: 'Precipitation', value: '3.00', unit: 'mm', icon: 'precipitation.svg', arrow: 'circle' },
    { id: 4, name: 'UV', value: '5.4', unit: 'km', icon: 'uv.svg', arrow: 'arrow-down' },
    { id: 5, name: 'Pressure', value: '147', unit: '', icon: 'pressure.svg', arrow: 'arrow-down' },
    { id: 6, name: 'Wind', value: '3.01', unit: 'mm', icon: 'wind.svg', arrow: 'arrow-down' },
  ]

export const RatioWidget1 = () => {
    return (
        <div className=' ratio-widget ratio-widget1'>
            <SmallCard {...data[0]} />
            <SmallCard {...data[1]} />
            <SmallCard {...data[2]} />
        </div>
    )
}
export const RatioWidget2 = ({ index }) => {
    return (
        <div className=' ratio-widget ratio-widget2'>
            <SmallCard {...data[3]} />
            <SmallCard {...data[4]} />
            <SmallCard {...data[5]} />
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

