import React from "react";


function App(){

    let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
let cssstyle = {};

if(curDate >= 5 && curDate < 12){
  greeting = "Good Morning";
  cssstyle.color= "orange";
}
else if(curDate >= 12 && curDate < 17){
  greeting = "Good Afternoon";
  cssstyle.color="yellow";
}
else if(curDate >= 17 && curDate < 21){
  greeting = "Good Evening";
  cssstyle.color="red";
}
else{
  greeting = "Good Night";
  cssstyle.color="darkblue";
}

    return(
        <>
         <div>
         <h1> Hello friend <span style={cssstyle}>{greeting}</span> </h1>
         </div>
        </>
    )}
export default App;