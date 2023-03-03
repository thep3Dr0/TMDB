import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../state/ElementContex";


const Search = ({queryParam})=>{   
    const [searchList,setSearchList] = useState([])
    const [selectedElement,setSelectedElement] = useState({})
    const dispatch = useDispatch()

    const selectedxElement = useSelector((state)=>state.element.value)

    const clickHandler = (searchedElement) => {
        dispatch(selectElement(searchedElement))
    }
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=e5446f8ec2508e09e1bbbbba89df1cf7&language=en-US&query=${queryParam}&page=1&include_adult=false`)
        .then(res=> {
            setSearchList(res.data.results)})
    },[])
    return(
        <>
            {searchList.map(searchedElement=>{
                return (
                    <Link to={`/movie/${searchedElement.id}`} key={searchedElement.id}>
                      <button onClick={()=>clickHandler(searchedElement)}>
                        <Card element={searchedElement} />
                      </button>
                    </Link>
                )
            })}
        </>
    )
}

export default Search


