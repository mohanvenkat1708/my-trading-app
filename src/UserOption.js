import {useState} from "react";
import "./UserOption.css"
function UserOption(){

    const [choice, setChoice]=useState("");
    return (<>
        <h1>Happy {choice}Trading Journey!!</h1>
    <div className="option-row">

        <div className="option-container">
            <button  className="gold-img"onClick={()=>setChoice("Gold ")}></button>
            <span className="option-label">Gold</span>
        </div>
        <div className="option-container">
            <button className="crude-img" onClick={()=>setChoice("Commodity ")}></button>
            <span className="option-label">Commodity</span>
        </div>
        <div className="option-container">
            <button className="stock-img" onClick={()=>setChoice("Stock ")}></button>
            <span className="option-label">Stocks</span>
        </div>
        <div className="option-container">
            <button class="forex-img" onClick={()=>setChoice("Forex ")}></button>
            <span className="option-label">Forex</span>
        </div>

    </div>
    </>
    )
    
}

export default UserOption;