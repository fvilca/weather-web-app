import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu-bar.scss'

import logo from '../images/logo.svg'
import { MenuIcons } from './MenuIcons'

export default function MenuBar() {

    return (
        <>
            <nav id="menu-bar">
                <NavLink exact activeClassName='current'
                    to='/'>
                    <img src={logo} alt="" className='menu-icon' />
                    Inicio
                </NavLink>

                <NavLink exact activeClassName='current'
                    to='/'>
                    {MenuIcons[0]}
                    Home
                </NavLink>

                <NavLink exact activeClassName='current'
                    to='/hours#sectionhours'>
                    {MenuIcons[1]}
                    24 Hours
                </NavLink>

                <NavLink exact activeClassName='current'
                    to='/cities#sectioncities'>
                    {MenuIcons[2]}
                    Cities
                </NavLink>
                <NavLink exact activeClassName='current'
                    to='/setting'>
                    {MenuIcons[3]}
                    Setting
                </NavLink>
            </nav>
        </>
    )
}
