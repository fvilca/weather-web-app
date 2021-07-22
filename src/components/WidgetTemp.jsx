import React from 'react'
import './widget.scss'

export default function WidgetTemp() {
    return (
        <div className='widget-temp'>
            <div className="temp">
                <p className="number">23</p>
                <p className="grade">°C</p>
            </div>
            <div className="label">
                AREQUIPA, PE
            </div>
        </div>
    )
}
