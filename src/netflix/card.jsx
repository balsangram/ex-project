import React from "react";
import "../index.css";

function Card (props){
return (
    <>
    <div className="">
    <div className="card">
        <img className="card_img" src={props.img} alt="" />
        <h1 className="card_h1">{props.title}</h1>
        <a href={props.link}>
            <button className="card_btn">click</button>
        </a>
    </div>
    </div>
    </>
)
}
export default Card;