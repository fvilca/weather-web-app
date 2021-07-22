import React from 'react'
import sunny from '../images/day_sunny.svg'
import './card.scss'

export default function Card() {
    return (
        <div className='card'>
            <img src={sunny} alt='sunny' />
            <div className="canvas-card">
                <div className="temp">
                    <p className="number">23</p>
                    <p className="grade">°</p>
                    <p className="separator">,</p>
                    <p className="decimal">4</p>
                </div>
                <div className="label-card">
                    Tarde
                </div>
            </div>
        </div>
    )
}
