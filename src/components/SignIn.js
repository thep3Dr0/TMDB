import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
/* import { signin } from "../state/UserContext"; */

const SignIn = ()=>{
    const [password,setPassword] = useState("")
    const [email,setemail] = useState("")
    const [username,setUsername] = useState("")
    const navigate = useNavigate()
    const SubmitHandler= (e)=>{
        e.preventDefault()
        navigate("/login")

        axios.post("http://localhost:3001/user/sign-in",{
        password,
        email,
        username
        })
        .then(res=>res.data)
        .catch(err=>console.log(err))
    }
    return(
            <form onSubmit={SubmitHandler}>
                <label>username:
                    <input value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                </label>
                <label>email:
                    <input value={email} onChange={(e)=>setemail(e.target.value)}></input>
                </label>
                <label>password:
                    <input value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </label>
                <Link to="/"></Link>
                  <button type="submit">registrarse</button>
            </form>
    )
}
export default SignIn