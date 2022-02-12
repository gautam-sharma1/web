import React from "react";


function Card(props) {

    let date = props.date;
    let title = props.title;
    let summary = props.summary;
    let img = props.img;
    let link = props.link;

    return <div className="card">
        <img src={img.path} class="card-img-top" alt={img.alt}></img>
        <div class="card-body">
            <a href={link}><h5 class="card-title">{title}</h5></a>
            <p class="card-text">{summary}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Published on {date}</small>
        </div>
    </div>

};

export default Card;