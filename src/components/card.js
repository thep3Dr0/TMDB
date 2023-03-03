import React from "react";


const Card = ({element})=>{
    return(
        <div className="cardContent">
            <h3>{element.title||element.name}</h3>
            <img src={`https://image.tmdb.org/t/p/w300/${element.poster_path}`} alt={`movie: ${element.title}`}></img>
        </div>
    )
}

export default Card;