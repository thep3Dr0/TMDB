import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { logout } from "../state/UserContext";



const HandleSession = ()=>{
    const user = useSelector((state)=>state.user.value)
    const dispatch = useDispatch()
    
    
    const logOutHandler = () => {
        dispatch(logout())
    }
    
    const clickHandler = () =>{
        
    }

    if (user){
        return(
            <>
            <Link to={`/account/${user.id}/favorites`}>
                <button onClick={clickHandler}>favoritos</button>
            </Link>
            <Link to={`/account/${user.id}`}>
                <button>{user.username}</button>
            </Link>
            <Link to="/">
                <button onClick={logOutHandler}>Log Out</button>
            </Link>
            </>
        )
    }else{
        return(
        <>
            <Link to="/login" >
                <button>"Iniciar Sesion"</button>
            </Link>
            <Link to="/sign-in ">
                <button>"Registrarse"</button>
            </Link>
        </>
        )
    }
}




export default HandleSession