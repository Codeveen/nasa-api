import react from "react";
import './picInfo.css'

function Picinfo(props){
    const {selectedPic} = props;
    return(
            <div className="infoContainer">
                <div class="selectedInfo">
                    <span className="close"><i onClick={()=>props.onPicSelect()} class="x fas fa-times"></i></span>
                    <h2>INFO</h2>
                    <hr/>
                    {selectedPic}
                    <hr/>
                </div>
            </div>
    )

}

export default Picinfo;