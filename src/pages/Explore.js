import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/card";
import Picinfo from "../components/picInfo/picInfo";
import { HashLoader } from "react-spinners";
import Footer from "../components/Footer/Footer";
import './Explore.css';

function Explore(){
    const [countQuery, updateCountQuery] = useState();
    const [timeoutId, updateTimeoutId] = useState();
    const [picList, updatePicList] = useState([]);
    const [selectedPic, onPicSelect] = useState();
    const [loading, setLoading] = useState(false)

    const fetchData = (count) =>{
        setLoading(true)
        axios.get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_NASA_API + '&count=' + count)
        .then((response) => {
            console.log(response)
            const setPics = response.data;
            updatePicList(setPics);
            setLoading(false)
        });
    };
    

    const onDate = (event) => {
        clearTimeout(timeoutId);
        updateCountQuery(event.target.value)
        const timeout = setTimeout(() => fetchData(event.target.value), 500);
        updateTimeoutId(timeout)
    }

    return(
        <div className="explore">
            {selectedPic && <Picinfo selectedPic={selectedPic} onPicSelect={onPicSelect}/>}
            <div className="searchBox">
                <img className="searchIcon" src="/images/search-img.png"></img>
                <input className="input" placeholder="count" onChange={onDate} value={countQuery}></input>
            </div>
            <hr className="line"></hr>
            {loading==false ? (
                <div>
                    <h3 className="explore-head">Explore</h3>
                <div className="container">
                    {picList?.length?picList.map((pic, index)=> <Card key={index} pic={pic} onPicSelect={onPicSelect}/>):
                    <div className="msg-container">
                        <p className="user"><i class="fas fa-user-ninja"></i>Developer</p>
                    <div className="msg">
                        <h3>Please specify the number of pictures to be displayed :) </h3>
                    </div>
                    </div>}
                </div>
                    </div>
            ):(
               <div className="loader">
                   <HashLoader color={'#FFFFFF'} />
                   <p className="loadermsg">Fetching Data....</p>
               </div> 
            ) }
        </div>
    )
}

export default Explore