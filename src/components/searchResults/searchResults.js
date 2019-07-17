import React from "react";
import './searchResults.css'

export default function searchResults({listData,clickHandler}){
    let iteratedList = null;
    if(!listData.length){
        iteratedList = <li key={99}> No data found</li>   
    } else{
        iteratedList =  listData.map((data)=>displayItem(data,clickHandler))
    }
    return (
        <ul className="iterateList">
            {iteratedList}
        </ul>
      )
}

function displayItem({id, title, body},clickHandler){
    return (
        <li key={id} onClick={()=>clickHandler(id)}>
            <div>
                <span className="index">{id}</span>
            </div>   
            <div>
                <span>{title}</span>
                <span className="body">{body}</span>
            </div>
        </li>
    )
}