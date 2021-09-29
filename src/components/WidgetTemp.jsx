import React from 'react'
import './widget.scss'

export default function TempWidget({temp}) {
    return (
        <div className='temp-widget'>
            <p className="temp--number">{temp}</p>
            <p className="temp--grade">°C</p>
        </div>
    )
}
