import React, {  useContext, useEffect, useState } from 'react'
import axios from "axios"
import {Card} from "react-bootstrap"

import { imageUrl } from '../Url'
import { useNavigate } from 'react-router-dom'
import { Context } from '../App'




const Movies = ({movie}) => {
  const {setfirst}= useContext(Context)
  const {pass,setpass,filter,setfilter,searchtest} =useContext(Context)

    const [movies, setmovies] = useState([])

    useEffect(() => {

        axios.get(movie).then((res) => {setmovies(res.data.results)
        if(searchtest.length === 0){
          setfilter(res.data.results)
        }
      
     } )
        setfirst(true)
   }, [movie]);
   
   const nav= useNavigate();
  
   const Navigate =(item)=>{
      setpass(item)
     nav("/Details")
    
     }
      console.log(pass);
    
  return (
    <div className="row justify-content-center">
    

    {filter.map((i)=>{
     return(
     
             <Card style={{ width: '18rem', border:"1px solid black",
             margin:"10px",
             padding:"20px",
             float:"left" }}>
   <Card.Img variant="top" src={imageUrl+i.poster_path} style={{height:"200px"}} />
   <Card.Body>
     <Card.Title>{i.id}</Card.Title>
     <Card.Text>{i.original_title}</Card.Text>
     <Card.Text>{i.popularity}</Card.Text>
     <Card.Text>{i.release_date}</Card.Text>
     <button onClick={()=>Navigate(i)}>Details</button>
     

     
   </Card.Body>
 </Card>
         
 
     )
  })}
   
    
    </div>
  )
}

export default Movies
