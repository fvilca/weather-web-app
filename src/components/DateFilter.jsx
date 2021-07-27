import React from 'react'
import './filter.scss'

const DateFilter = () => {
    return (
        <div className=' filter date-filter'>

            <svg
                className='icon date-icon'
                xmlns="http://www.w3.org/2000/svg" width="39.553" height="43.948" viewBox="0 0 39.553 43.948">
                <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M17.684,22.777H13.29v4.395h4.395Zm8.79,0H22.079v4.395h4.395Zm8.79,0H30.869v4.395h4.395ZM39.658,7.395h-2.2V3H33.066V7.395H15.487V3H11.092V7.395h-2.2A4.375,4.375,0,0,0,4.522,11.79L4.5,42.553a4.394,4.394,0,0,0,4.395,4.395H39.658a4.408,4.408,0,0,0,4.395-4.395V11.79A4.408,4.408,0,0,0,39.658,7.395Zm0,35.158H8.895V18.382H39.658Z" transform="translate(-4.5 -3)" fill="#939482" />
            </svg>

            <svg
                className="svg-arrow-left" xmlns="http://www.w3.org/2000/svg" width="8.93" height="14.86" viewBox="0 0 8.93 14.86">
                <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M0,0,5.308,5.309,0,10.617" transform="translate(6.808 12.739) rotate(180)" fill="none" stroke="#3c423a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            </svg>

            <div className="day-input filter-text"> 24 </div>
            <div className="month-input filter-text">Jul</div>
            <div className="year-input filter-text">...</div>

        </div>
    )
}

export default DateFilter
