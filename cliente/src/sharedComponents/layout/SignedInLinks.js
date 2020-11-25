import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../redux/actions/authActions";
import { NavLink } from "react-router-dom";

// creata SignedInLinks functional componet
const SignedInLinks = () => {
    
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);

    const handleClick = (e) => {
        dispatch(logout());
    }
    return (
        <ul className="right">
            <li onClick={handleClick}>Logout</li>
            <li> <NavLink to='/' className="btn btn-floating pink lighten-3">{auth.data.email[0]}</NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;