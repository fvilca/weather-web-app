import React from 'react'
import './widget.scss'

export default function TempWidget() {
    return (
        <div className='temp-widget'>
            <p className="number">23</p>
            <p className="grade">°C</p>
        </div>
    )
}
