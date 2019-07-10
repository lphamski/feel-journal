import React from 'react';
import { NavLink } from 'react-router-dom';

function WhenSignedOut (){
    return (
        <ul className="right">
            <li><NavLink to='/'>Sign up</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
        </ul>
    )
}

export default WhenSignedOut
