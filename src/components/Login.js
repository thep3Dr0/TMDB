import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../state/UserContext";

const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const SubmitHandler= (e)=>{
        e.preventDefault()
        navigate("/")
        axios.post("http://localhost:3001/user/log-in",{
            email,password
        })
        .then(res=>{
            dispatch(login(res.data))
        })
        .catch(err=>(err))
    } 
    return(
        <>
            <Link to="/sign-in">
                <button>Registrarse</button>
            </Link>
            <form onSubmit={SubmitHandler}>
                <label>email:
                    <input value={email.email} onChange={(e)=>setEmail(e.target.value)}></input>
                </label>
                <label>password:
                    <input value={password.password} onChange={(e)=>setPassword(e.target.value)}></input>
                </label>
                <button type="sumbit">logearse</button>
            </form>
        </>
    )
}
export default Login