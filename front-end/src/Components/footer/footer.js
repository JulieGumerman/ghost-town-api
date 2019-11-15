import React from 'react';
import {NavLink} from 'react-router-dom'
import './footer.scss'


const Footer = () => {
    return (
        <footer>
            <NavLink to='/'>Ghost Town Locator (MidWest)</NavLink>
            <NavLink to='/map-overview'>Map Overview</NavLink>
            <NavLink to='/about-us'>About Us</NavLink>
        </footer>
    )
}

export default Footer