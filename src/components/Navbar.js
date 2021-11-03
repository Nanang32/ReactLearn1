import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar({children}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Your App</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact  className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="py-4">
                {children}
            </div>
        </div>

    );
}

export default Navbar;