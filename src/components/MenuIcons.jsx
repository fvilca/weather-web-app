import React from 'react'

/*
 * + NEW
 * añadir la clase menu-icon a svg
 * añadir id = stroke|fill a cada path
 * añadir al array final
 */

export const HomeIcon = () => {
    return (
        <svg className='menu-icon'
            xmlns="http://www.w3.org/2000/svg" width="28.1" height="31" viewBox="0 0 28.1 31">
            <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(-3.5 -2)">
                <path id="stroke" data-name="Path 1207" d="M4.5,13.15,17.55,3,30.6,13.15V29.1A2.9,2.9,0,0,1,27.7,32H7.4a2.9,2.9,0,0,1-2.9-2.9Z" transform="translate(0 0)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="stroke" data-name="Path 1208" d="M13.5,33V18h9V33" transform="translate(-0.45 -1)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const HoursIcon = () => {
    return (
        <svg
            className='menu-icon'
            xmlns="http://www.w3.org/2000/svg"
            width="31.475" height="29.139"
            viewBox="0 0 31.475 29.139">
            <g transform="translate(-138 -796)">
                <path id="stroke" data-name="Path 85" d="M18,9v7.89l5.26,2.63" transform="translate(136.5 795.5)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <g id="Group_1804" data-name="Group 1804" transform="translate(142.547 797.703)">
                    <g id="Group_1803" data-name="Group 1803">
                        <path id="fill" data-name="Path 1195" d="M80.543,47.185a.922.922,0,0,0-1.254-.359,14.672,14.672,0,0,0-5.161,4.812.922.922,0,0,0,1.546,1.006,12.821,12.821,0,0,1,4.51-4.2A.922.922,0,0,0,80.543,47.185Z" transform="translate(-73.979 -46.71)" fill="#939482" />
                    </g>
                </g>
                <g id="Group_1806" data-name="Group 1806" transform="translate(138 796)">
                    <g id="Group_1805" data-name="Group 1805">
                        <path id="fill" data-name="Path 1196" d="M16.911,19a.922.922,0,0,0,0,1.844A12.725,12.725,0,1,1,4.429,36.017l1.214,1.212a.922.922,0,1,0,1.3-1.305L3.933,32.917a.931.931,0,0,0-.664-.269.921.921,0,0,0-.831.525L.155,36.6A.922.922,0,1,0,1.69,37.624l.906-1.36a15.793,15.793,0,0,0,.411,1.656A14.567,14.567,0,1,0,16.911,19Z" transform="translate(0 -19)" fill="#939482" />
                    </g>
                </g>
            </g>
        </svg>
    )
}

export const CitiesIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.977"
            height="31.305"
            viewBox="0 0 25.977 31.305"
            className='menu-icon'>
            <g transform="translate(1 1)">
                <path
                    id="stroke"
                    d="M28.477,13.488c0,9.324-11.988,17.316-11.988,17.316S4.5,22.812,4.5,13.488a11.988,11.988,0,0,1,23.977,0Z" transform="translate(-4.5 -1.5)"
                    fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path
                    id="stroke"
                    d="M21.492,14.5a4,4,0,1,1-4-4,4,4,0,0,1,4,4Z" transform="translate(-5.508 -2.508)"
                    fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

    )
}

export const SettingIcon = () => {
    return (
        <svg
        className='menu-icon' 
        xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
            <g data-name="Icon feather-settings" transform="translate(-0.5 -0.5)">
                <path id="stroke" data-name="Path 1209" d="M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z" transform="translate(-2 -2)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="stroke" data-name="Path 1210" d="M25.755,19.955a2.175,2.175,0,0,0,.435,2.4l.079.079a2.638,2.638,0,1,1-3.73,3.73l-.079-.079a2.193,2.193,0,0,0-3.717,1.555v.224a2.636,2.636,0,1,1-5.273,0v-.119a2.175,2.175,0,0,0-1.424-1.99,2.175,2.175,0,0,0-2.4.435l-.079.079a2.638,2.638,0,1,1-3.73-3.73l.079-.079A2.193,2.193,0,0,0,4.36,18.742H4.136a2.636,2.636,0,0,1,0-5.273h.119a2.175,2.175,0,0,0,1.99-1.424,2.175,2.175,0,0,0-.435-2.4l-.079-.079a2.638,2.638,0,1,1,3.73-3.73l.079.079a2.175,2.175,0,0,0,2.4.435h.105a2.175,2.175,0,0,0,1.318-1.99V4.136a2.636,2.636,0,0,1,5.273,0v.119A2.193,2.193,0,0,0,22.354,5.81l.079-.079a2.638,2.638,0,1,1,3.73,3.73l-.079.079a2.175,2.175,0,0,0-.435,2.4v.105a2.175,2.175,0,0,0,1.99,1.318h.224a2.636,2.636,0,1,1,0,5.273h-.119a2.175,2.175,0,0,0-1.99,1.318Z" transform="translate(0 0)" fill="none" stroke="#939482" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}


export const MenuIcons = [<HomeIcon />, <HoursIcon />, <CitiesIcon />, <SettingIcon />];


