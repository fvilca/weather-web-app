import React from 'react'
import './filter.scss'

const DateFilter = () => {
    return (
        <div className=' filter filter--date'>
            <div className="filter--container">
                <svg className='filter--icon'
                    width="39.553" height="43.948" viewBox="0 0 39.553 43.948">
                    <path d="M17.684,22.777H13.29v4.395h4.395Zm8.79,0H22.079v4.395h4.395Zm8.79,0H30.869v4.395h4.395ZM39.658,7.395h-2.2V3H33.066V7.395H15.487V3H11.092V7.395h-2.2A4.375,4.375,0,0,0,4.522,11.79L4.5,42.553a4.394,4.394,0,0,0,4.395,4.395H39.658a4.408,4.408,0,0,0,4.395-4.395V11.79A4.408,4.408,0,0,0,39.658,7.395Zm0,35.158H8.895V18.382H39.658Z" transform="translate(-4.5 -3)" fill="#939482" />
                </svg>
                <div className="filter--text"> Mayo, 24 </div>
                <svg className='filter--arrow'
                    width="21.685" height="13.343" viewBox="0 0 21.685 13.343">
                    <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M7.307,14.614,0,7.307,7.307,0" transform="translate(3.536 10.843) rotate(-90)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
                </svg>
            </div>
        </div>
    )
}

export default DateFilter