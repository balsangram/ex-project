import React from "react";

function Sum (a , b ){
  let Sum = a+b ;
  return Sum;
}
function Sub (a , b ){
  let Sub = a-b ;
  return Sub;
}
function Multi (a , b ){
  let Multi = a*b ;
  return Multi;
}
function Div (a , b ){
  let Div = a/b ;
  return Div;
}
function Per (a , b ){
  let Per = a%b ;
  return Per;
}

export {Sum ,Sub,Multi,Div,Per};