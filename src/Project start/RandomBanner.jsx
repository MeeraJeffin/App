import React, { useEffect, useState } from 'react'
import { imageUrl, latestMovies } from '../Url';
import axios from "axios"
const RandomBanner = () => {
    const [latest, setlatest] = useState([])


    useEffect(() => {

        axios.get(latestMovies).then((res) => {
            const movies =res. data .results
            console.log(movies);
            const random = Math.floor(Math.random() * movies.length);
            setlatest(movies[random])
            console.log(movies[random]);
        })
   }, []);
       console.log(latest);
     
   const img=imageUrl+latest.backdrop_path;
  return (
    <div style={{backgroundImage:`url(${img})`,  height:"91vh",backgroundSize:"100% 100%"}}>
    <div style={{textAlign:"center",padding:"200px 100px",color:"white"}}>
      <h5>Title:{latest.original_title}</h5>
      <h5>Overview:{latest.overview}</h5>
      
      </div>
   </div>
  )
}

export default RandomBanner