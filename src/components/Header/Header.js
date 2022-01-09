import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Header.css'


function Header(){
    return(
        <nav className="navbar">
            <div className="nav-container">
                <Link to='/' className="logo">
                    Spacestagram<i class="fas fa-meteor"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Header