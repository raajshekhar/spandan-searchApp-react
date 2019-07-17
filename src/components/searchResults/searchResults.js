import React from "react";
import logo from '../../logo.svg';
import './searchResults.css'

export default function searchResults({listData,clickHandler}){
    let iteratedList = null;
    if(!listData.length){
        iteratedList = <li key={99}> No data found</li>   
    } else{
        iteratedList =  listData.map((data)=>displayItem(data,clickHandler))
    }
    return (
        <ul>
            {iteratedList}
        </ul>
      )
}

function displayItem({id, title, body},clickHandler){
    return (
        <li key={id} onClick={()=>clickHandler(id)}>
            <img src={logo} alt="img"/>   
            <span>{title}</span>
            <span className="body">{body}</span>
        </li>
    )
}