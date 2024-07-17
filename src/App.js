import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RandomBanner from './Project start/RandomBanner';
import PropswithNav from './Project start/PropswithNav';
import Movies from './Project start/Movies';
import { comedyMovies, latestMovies, popularMovies } from './Url';
import Details from './Project start/Details';
import { createContext, useState } from 'react';


const Context= createContext();
function App() {
  const [first, setfirst] = useState(true);
  const [pass, setpass] = useState({})
  const [movie, setmovie] = useState([])
  const [searchtest, setsearchtest] = useState("")
  const [filter, setfilter] = useState([])
  const handlesearch=()=>{
    const data=movie.filter(i=>(i.original_title && i.original_title.toLowerCase().includes(searchtest ?. toLowerCase() ??'')))
    console.log(movie);
    setfilter(data)
  }
   console.log(filter);
  return (
    <div >
       <BrowserRouter>
       <Context.Provider value={{first,setfirst,pass,setpass,searchtest,setsearchtest,movie,setmovie,handlesearch,filter,setfilter}}>
    <PropswithNav />
    {/* <Banner /> */}
    
   {first=== true ?<RandomBanner /> : "" } 

    <Routes>
      <Route  path="/Moviespopular" element={<Movies movie={popularMovies}/>} />
      <Route  path="/Movieslatest" element={<Movies movie={latestMovies}/>} />
      <Route  path="/Moviescomedy" element={<Movies movie={comedyMovies}/>} />
      {/* <Route  path="/Details" element={<Details />} /> */}
       </Routes>
    </Context.Provider>
    </BrowserRouter>
    
      
    
    </div>
  );
}

export default App;
export {Context};
