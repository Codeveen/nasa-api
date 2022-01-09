import React, { useState } from "react";
import './card.css'


function Card(props) {
    const {title,date,explanation, hdurl} = props.pic;
    const [style, setStyle] = useState("notLike")

    function changeStyle(){
        if (style == "notLike"){
            setStyle("like")
        } else {
            setStyle("notLike")
        }
    
    }
    return(
            <div className="card">
                <div className="front">
                    <img className="thumbnail" src={hdurl}/> 
                    <h3 className="name">{title}</h3>
                </div>
                <div className="back">
                    <div className="info">
                        <p className="date">{date}<span>Date</span></p>
                        <hr className="date-line"></hr>
                    </div>
                    <button className="btn" onClick={()=>props.onPicSelect(explanation)}>Read More</button>
                    <div className="like-dislike">
                        <div className={style}>
                            <i onClick={changeStyle} class="fas fa-heart"></i>
                        </div>
                    </div>
                </div>

                <div className="background">
                
                </div>
            </div>
    )
}

export default Card