import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./card";


const Favorites = () =>{
    const user = useSelector(state => state.user.value)
    const [favoriteList,setFavoriteList] = useState([]) 
    axios.get(`http://localhost:3001/user/${user.id}/favorite-list`)
    .then(res=>setFavoriteList(res.data))

    
    return (
        <div>
            {favoriteList.map(favorite=>{
            return (
                <Link to={"/movie/:id"}>
                  <button>
                    <Card element={favorite}/>
                  </button>
                </Link>
            )
            })}
        </div>
    )
}

export default Favorites