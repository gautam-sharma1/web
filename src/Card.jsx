import React from "react";


function Card(props) {

    let date = props.date;
    let title = props.title;
    let summary = props.summary;
    let img = props.img;
    let link = props.link;


    return <div className="card">
        
        <img src={img.path} className="card-img-top" alt={img.alt}></img>
        <div className="card-body">
            <a href={link}><h5 className="card-title">{title}</h5></a>
            <p className="card-text">{summary}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Published on {date}</small>
        </div>
    </div>

};

export default Card;