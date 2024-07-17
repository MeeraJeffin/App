import React, { useEffect, useState } from 'react'
import axios from "axios"
import { imageUrl, latestMovies } from '../Url';

const Banner = () => {
    const [movie, setmovie] = useState([])


    useEffect(() => {

        axios.get(latestMovies).then((res) => setmovie(res.data.results))
   }, []);

   console.log(movie[4]);
   const img=imageUrl+movie[4]?.backdrop_path;
  return (
    <div style={{backgroundImage:`url(${img})`,  height:"91vh",backgroundSize:"100% 100%"}}>
     <div style={{textAlign:"center",padding:"200px 100px",color:"white"}}>
       <h5>Title:{movie[4]?.original_title}</h5>
       <h5>Overview:{movie[4]?.overview}</h5>
       </div>
    </div>
  )
}

export default Banner