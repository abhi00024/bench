import React from "react";
import * as util from "./util"

let userName = "Abhishek"

const operator = () =>{
    if(10 === "10"){
        return true
    }else{
        return false
    }
}

const jsParameter = (userName,message) =>{
    return [userName ,message];
}

const newValue = (a,b,c) =>{
    return a*b/c;
}

const user = {
 name :"Abhishek",
 age:"20",
}

const arrayData = ["Abhishek","Gautam"]

const indexofArrayData =arrayData.findIndex((item)=> item === "Abhishek");



const transformToObjects = (numberArray) => {
    return numberArray.map(val => ({ val }));
};

const inputArray = [1, 2, 3];
const resultArray = transformToObjects(inputArray);


const JavascriptPractice = () => {
  return (
    <>
      <div>
        <p>{util.apikey}</p>
        <p>{util.myString}</p>
        <p>{userName}</p>
        {operator() ? <p>True</p> : <p>False</p>}
        {jsParameter("Abhishek"," Gautam")}
        <p>{newValue(10,5,2)}</p>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>
      {arrayData.map((item)=>(
        <p>{item}</p>
      ))}
      <p>{indexofArrayData}</p>
      {resultArray.map((item)=>(
        <p>{item.val}</p>
      ))}
    </>
  );
};

export default JavascriptPractice;
