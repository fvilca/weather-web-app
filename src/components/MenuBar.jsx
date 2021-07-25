import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu-bar.scss'

import logo from '../images/logo.svg'
import hours from '../images/icon_24hours.svg'
import cities from '../images/icon_cities.svg'
import user from '../images/icon_user.svg'


export default function MenuBar() {

    const icon = hours;
    return (
        <>
            <nav id="menu-bar">
                <div className="menu-item">
                    <NavLink exact activeClassName='current'
                        to='/'>
                        <img src={logo} alt="" className='menu-icon' />
                        
                        Inicio
                    </NavLink>
                </div>

                <div className="menu-item">
                    <NavLink exact activeClassName='current'
                        to='/hours'>
                        
                        <img src={hours} alt="" className='menu-icon' />
                        {icon}
                        24 Horas
                    </NavLink>
                </div>
                <div className="menu-item">
                    <NavLink exact activeClassName='current'
                        to='/city'>
                        <img src={cities} alt="" className='menu-icon' />
                        ciudades
                    </NavLink>
                </div>
                <div className="menu-item">
                    <NavLink exact activeClassName='current'
                        to='/user'>
                        <img src={user} alt="" className='menu-icon' />
                        Usuario
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
