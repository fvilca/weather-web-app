import React from 'react'
import './widget.scss'

export default function TempWidget() {
    return (
        <div className='temp-widget'>
            <p className="temp--number">23</p>
            <p className="temp--grade">°C</p>
        </div>
    )
}
