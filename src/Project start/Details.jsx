import React, { useContext, useEffect } from 'react'
import { Context } from '../App'
import { imageUrl } from "../Url"



const Details = () => {
  const {setfirst}= useContext(Context)
  const {pass} =useContext(Context)
  
 console.log(setfirst);
  
  useEffect(() => {
    
   setfirst(false)
   
  }, [])
  console.log(pass);
  
  return (
    <div>
       <h1 style={{textAlign:"center"}}>Movie Details</h1> 
       <h2 style={{padding:"10px 30px",textDecoration:"underline",color:"red"}}>Tittle:{pass.title}</h2>
       <div style={{display:"flex"}}>
            <img src={imageUrl+pass.backdrop_path} alt=""  style={{width:"60%", padding:"20px 30px", height:"70vh"}}/>
            
              <img src={imageUrl+pass.poster_path} alt=""  style={{width:"40%", padding:"20px 30px", height:"70vh"}}/>
              {/* <img src={imageUrl+pass.backdrop_path} alt=""  style={{width:"30%",padding:"20px 30px"}}/> */}
           </div>
       <div style={{padding:"10px 30px",width:"60%",border:"1px solid black",padding:"20px 40px",marginLeft:"30px"}}>
       <h2>Title:{pass.title}</h2>
       <p><b>Overview:{pass.overview}</b></p>
       <h4>Date:{pass.release_date}</h4>
       </div>
        </div>
  )
}

export default Details