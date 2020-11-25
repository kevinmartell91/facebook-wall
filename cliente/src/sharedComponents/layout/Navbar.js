import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {

    const auth  = useSelector((state) => state.auth);
    const links = ( auth && auth.success) ? <SignedInLinks /> : <SignedOutLinks /> ;
    return (
        <nav className="nav-rapper blue light-3">
            <div className="container">
                <Link to='/dashboard' className="brand-logo">Facebook</Link>
                {links}
                
            </div>
        </nav>
    )
}

export default Navbar;