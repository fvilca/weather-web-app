import React, { useEffect, useState } from 'react'
import './weather-slider.scss'
import { a, useTransition, useSpringRef } from 'react-spring';

const data = [
    { svg: 'sunny', label: 'Soleado' },
    { svg: 'cloudy_d', label: 'Nublado parcialmente' },
    { svg: 'cloudy_n', label: 'Nublado parcialmente' },
]

const WeatherSlider = () => {

    const [currentIndex, setcurrentIndex] = useState(0)
    const transRef = useSpringRef()

    const tSpring = useTransition(currentIndex, {
        ref: transRef,
        key: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    const nextHandle = (params) => {
        if (currentIndex !== (data.length - 1))
            setcurrentIndex(currentIndex + 1)
    }
    const prevHandle = (params) => {
        if (currentIndex !== 0)
            setcurrentIndex(currentIndex - 1);
    }

    useEffect(() => {
        transRef.start()
    }, [currentIndex])

    return (
        <div className="weather-slider">
            <svg
                onClick={prevHandle}
                width="16.728" height="28.456" viewBox="0 0 16.728 28.456">
                <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M24.192,30.384,13.5,19.692,24.192,9" transform="translate(-11 -5.464)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
            </svg>

            <div className="container-spring">
                {tSpring(
                    (style, item) => (
                        <a.div className='icon' style={style}>
                            <img src={require('../images/' + data[item]['svg'] + '.svg').default} alt='' />
                            <p className='slider-label'>Ahora: </p>
                            <p className='slider-label'> {data[item]['label']} </p>
                        </a.div>
                    )
                )
                }
            </div>

            <svg
                onClick={nextHandle}
                width="16.728" height="28.456" viewBox="0 0 16.728 28.456">
                <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M10.692,21.384,0,10.692,10.692,0" transform="translate(14.228 24.92) rotate(180)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
            </svg>
        </div>
    )
}

export default WeatherSlider
