import React from 'react'
import './filter.scss'

const CityFilter = () => {
    return (
        <div className='filter filter--city'>
            <div className="filter--container">
                <svg className='filter--icon'
                    width="36.856" height="36.856" viewBox="0 0 36.856 36.856">
                    <path d="M28.409,23.5a14.576,14.576,0,1,0-4.907,4.9L33.392,38.3l4.9-4.907ZM15.982,24.98a8.992,8.992,0,1,1,9-8.986,9.006,9.006,0,0,1-9,8.986Z" transform="translate(-1.44 -1.44)" fill="#939482" />
                </svg>
                <div className="filter--text">Arequipa, PE</div>
                <svg className='filter--arrow'
                    width="21.685" height="13.343" viewBox="0 0 21.685 13.343">
                    <path d="M7.307,14.614,0,7.307,7.307,0" transform="translate(3.536 10.843) rotate(-90)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
                </svg>
            </div>
        </div>
    )
}

export default CityFilter
