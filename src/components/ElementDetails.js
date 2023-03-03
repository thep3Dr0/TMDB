import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfav } from "../state/UserContext";



const ElementDetails = () =>{ 
    const user = useSelector((state)=>state.user.value)
    const SelectedElement = useSelector((state)=>state.element.value)
    const dispatch = useDispatch()
    const clickHandler = () =>{
        if (user) {
            dispatch(addfav(SelectedElement))
        }else{
            alert("to add favourites movies you must be logged") 
        }
    }
    return (
    <div>
        <h3>{SelectedElement.title||SelectedElement.name}</h3>
        <button onClick={clickHandler}>fav</button>
            <img src={`https://image.tmdb.org/t/p/w300/${SelectedElement.poster_path}`} alt={`resourse: ${SelectedElement.title}`}></img>
        <p>{SelectedElement.overview}</p>
    </div>
  )
}

export default ElementDetails 