import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.scss'

const Footer = () => {
    return (
        <nav className='header'>
            <NavLink to='/'>Ghost Town Locator</NavLink>
            <NavLink to='/map-overview'>Map Overview</NavLink>
            <NavLink to='/register'>Login/Register</NavLink>
            </nav>
    )
}

export default Footer