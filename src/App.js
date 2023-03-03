import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Card from './components/card';
import ElementDetails from './components/ElementDetails';
import { useDispatch, useSelector } from 'react-redux';
import {selectElement} from"./state/ElementContex"
import Favorites from './components/Favorites';


function App() {
  const user = useSelector((state)=>state.user.value)
  const dispatch = useDispatch()
  const [homeContent,SetHomeContent] = useState([])
  const selectedElement = useSelector((state)=>state.element.value)
  const [element,updateElement] = useState({})

  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e5446f8ec2508e09e1bbbbba89df1cf7")
    .then(res=>res.data)
    .then(res=>{
      SetHomeContent(res.results)
    })
    .catch(err=>console.log(err))
  },[])


  const clickHandler = (resourse) => {
    dispatch(selectElement(resourse))
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='' element={
          <>
            <h1>TMDB</h1>
            <h2>Popular movies</h2>
            {homeContent.length!==0 ? homeContent.map(resourse => {
              return (
                <Link to={`/movie/${resourse.id}`} key={resourse.id}>
                  <button onClick={()=>clickHandler(resourse)}>
                    <Card element={resourse} />
                  </button>
                </Link>
              )
            }) : null }
          </>
        }/>
        <Route path='movie/:id' element={<ElementDetails />}/>
        <Route path='account/:id/favorites' element={<Favorites />}/>
      </Routes>
    </>
  );
}

export default App;
