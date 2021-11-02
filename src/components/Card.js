import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.content.imgurl} alt="kucing" className="card-img-top"/>
            <h4 className="p-3">{props.content.title}</h4>
            <small className="card-body">{props.content.published}</small>
        </div>
    )
}

export default Card;