import React from 'react'
import './widget.scss'

export default function WidgetDate() {
    return (
        <div className='widget-date'>
            <div className="temp">
                <p className="number">08</p>
                <p className="grade">Jul</p>
            </div>
            <div className="label">
                13:45 pm
            </div>
        </div>
    )
}
