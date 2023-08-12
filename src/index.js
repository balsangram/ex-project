import React from "react";
import  ReactDOM  from "react-dom";
import fastName , {middleName,lastName} from "./App";

ReactDOM.render(
<>
<h1>hello</h1>
<h1>{fastName}</h1>
<h1>{middleName}</h1>
<h1>{lastName()}</h1>
</>,
document.getElementById("root")
);