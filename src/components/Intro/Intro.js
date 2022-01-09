import React from "react";
import {Link} from 'react-router-dom';
import './Intro.css';

function Intro() {
    return(
        <div>
            <div className="mainContainer">
            <video src="/video/video-1.mp4" autoPlay loop muted />
            <h1>WELCOME!</h1>
            <p>The Final Frontier</p>
            <div className="btns-container">
                    <Link className='exp-btn' to='/Explore'>EXPLORE</Link>
            </div>
            </div>
        </div>
    )
}

export default Intro