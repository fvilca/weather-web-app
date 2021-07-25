import React from 'react'
import './small-card.scss'


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
