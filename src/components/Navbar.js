import React, { useState } from "react";
import { Link,Route,Routes} from 'react-router-dom';
import HandleSession from "./HandleSession";
import Login from "./Login"
import Search from "./Search";
import SingIn from "./SignIn";

const Navbar = ()=>{
    const [queryString, updateQueryString] = useState("")
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <form onSubmit={(e)=>e.preventDefault()}>
                <label>
                  <input value={queryString} onChange={(e)=>updateQueryString(e.target.value)}></input>
                 </label>
                <Link to={`/search/${queryString}`}>
                  <button type='submit'>buscar</button>
                </Link>
                </form>
                <HandleSession />
            </nav>
        <Routes>
            <Route path="/search/:query" element={<Search queryParam={queryString}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-in" element={<SingIn />}/>
        </Routes>
      </>
    )
}

export default Navbar