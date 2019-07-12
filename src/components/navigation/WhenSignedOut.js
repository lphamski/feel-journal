import React from 'react';
import { NavLink } from 'react-router-dom';

function WhenSignedOut (){
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
    )
}

export default WhenSignedOut
