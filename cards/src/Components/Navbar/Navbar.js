import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

const Navbar = ({ searchChange }) => {

    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-black-80">
            <NavLink to="/" className="navbar-brand">
                <img src={logo} alt='cards' title='cards' className='w3 h3'/>
            </NavLink>
            <button className="navbar-toggler btn-outline-success" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link text-success" to="/cards">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-success" to="/connect">Connects</NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink className="nav-link text-success" to="/notifications">Notifications</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-success" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-success" to="/signin" tabIndex="-1">Sign Out</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 bg-transparent text-success" type="search" placeholder="Search" aria-label="Search" onChange={searchChange}/>
                </form>
            </div>
        </nav>

    );
}

export default Navbar;