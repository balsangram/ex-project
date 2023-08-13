import React from "react";
import Card from "./card";
import CData from "./data"

function Home(){
    return (
        <>
        <h1 className="center">Entertainment Platform</h1>
<div className="hole_page">
<div className="row">
         <Card
          img ={CData[0].img} 
          title = {CData[0].title}
          link = {CData[0].link}
          />

         <Card
          img ={CData[1].img} 
          title = {CData[1].title}
          link = {CData[1].link}
          />

         <Card
          img ={CData[2].img} 
          title = {CData[2].title}
          link = {CData[2].link}
          />
</div>

<div className="row">
         <Card
          img ={CData[3].img} 
          title = {CData[3].title}
          link = {CData[3].link}
          />

         <Card
          img ={CData[4].img} 
          title = {CData[4].title}
          link = {CData[4].link}
          />
         <Card
          img ={CData[5].img} 
          title = {CData[5].title}
          link = {CData[5].link}
          />
</div>
          </div>
        </>
    )
}

export default Home ;
