import React from 'react'
import './filter.scss'

const CityFilter = () => {
    return (
        <div className=' filter city-filter'>
            <svg
                className='icon search-icon'
                width="36.856" height="36.856" viewBox="0 0 36.856 36.856">
                <path id="Icon_map-search" data-name="Icon map-search" d="M28.409,23.5a14.576,14.576,0,1,0-4.907,4.9L33.392,38.3l4.9-4.907ZM15.982,24.98a8.992,8.992,0,1,1,9-8.986,9.006,9.006,0,0,1-9,8.986Z" transform="translate(-1.44 -1.44)" fill="#939482" />
            </svg>

            <div className="city-input filter-text">Arequipa</div>
            <svg  className="svg-arrow-right"
            xmlns="http://www.w3.org/2000/svg" width="8.93" height="14.86" viewBox="0 0 8.93 14.86">
                <path id="Icon_feather-chevron-left" d="M0,0,5.308,5.309,0,10.617" transform="translate(2.121 2.121)" fill="none" stroke="#3c423a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            </svg>

        </div>
    )
}

export default CityFilter
