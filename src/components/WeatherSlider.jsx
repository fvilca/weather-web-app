import React, { useState } from 'react'
import './weather-slider.scss'
import { a, useTransition, config } from 'react-spring';

const data = [
    { svg: 'cloudy_d', label: 'Nublado parcialmente' },
    { svg: 'cloudy_d', label: 'Nublado parcialmente' },
    { svg: 'cloudy_d', label: 'Nublado parcialmente' },
    { svg: 'sunny', label: 'Soleado' },
    { svg: 'cloudy_n', label: 'Nublado parcialmente' },
    { svg: 'cloudy_n', label: 'Nublado parcialmente' },
    { svg: 'cloudy_n', label: 'Nublado parcialmente' },
]

const WeatherSlider = () => {
    const [direction, setDirection] = useState(1)
    const [currentIndex, setcurrentIndex] = useState(3)

    const tSpring = useTransition(currentIndex, {
        key: null,
        from: { opacity: 0, transform: `translate3d(${direction * 100}px, 0, 0)` },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: `translate3d(0, 0, 0)` },
        //config: config.gentle,
        trail: 150,
    })

    const nextHandle = (params) => {
        if (currentIndex !== (data.length - 1)) {
            setcurrentIndex(currentIndex + 1)
            setDirection(1)
        }
    }
    const prevHandle = (params) => {
        if (currentIndex !== 0) {
            setcurrentIndex(currentIndex - 1);
            setDirection(-1)
        }
    }

    return (
        <div className="slider">
            <svg
                onClick={prevHandle}
                width="16.728" height="28.456" viewBox="0 0 16.728 28.456">
                <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M24.192,30.384,13.5,19.692,24.192,9" transform="translate(-11 -5.464)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
            </svg>

            {tSpring(
                (style, item) => {
                    console.log('style:',style)
                    return(
                    <div className='container-spring' style={style}>
                        <a.img className='img--left' style={style}
                        src={require('../images/' + data[item - 1]['svg'] + '.svg').default} alt='' />

                        <a.figure style={style}>
                            <img className='img--middle'
                                src={require('../images/' + data[item]['svg'] + '.svg').default} alt='' />
                            <figcaption>Ahora:</figcaption>
                        </a.figure>

                        <a.img className='img--rigth' style={{...style, delay:200}}
                            src={require('../images/' + data[item + 1]['svg'] + '.svg').default} alt='' />

                    </div>
                    )}
            )
            }
            <svg
                onClick={nextHandle}
                width="16.728" height="28.456" viewBox="0 0 16.728 28.456">
                <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M10.692,21.384,0,10.692,10.692,0" transform="translate(14.228 24.92) rotate(180)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
            </svg>

        </div>
    )
}

export default WeatherSlider
