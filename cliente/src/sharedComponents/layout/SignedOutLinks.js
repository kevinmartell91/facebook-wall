import React from 'react';
import { NavLink } from "react-router-dom";

const SingedOutLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to='/signup'>Signup</NavLink> </li>
            <li> <NavLink to='/signin'>Signin</NavLink>/NavLink> </li>
        </ul>
    )
}

export default SingedOutLinks;