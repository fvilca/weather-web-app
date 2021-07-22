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
                <p className="number">{value}</p>
                <p className="unit"> {unit} </p>
            </div>
            <div className="label-card" title={name}>
                {name}
            </div>
        </div>
    )
}
