import React from "react";
import {Sum ,Sub,Multi,Div,Per} from "./calculator";

function Valu(){
    return(
        <>
        <ul>
            <li> sum{Sum(3,5)}</li>
            <li> sub{Sub(3,5)}</li>
            <li>multiple{Multi(3,5)}</li>
            <li>division{Div(3,5)}</li>
            <li>persentage{Per(3,5)}</li>
        </ul>
        </>
    )
}
export default Valu;