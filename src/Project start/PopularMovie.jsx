import React, {  useEffect, useState } from 'react'
import axios from "axios"
import { Button, Card } from 'react-bootstrap';
import { imageUrl, popularMovies } from '../Url';




const PopularMovie = () => {
  const [product, setproduct] = useState([])
  
  
  useEffect(() => {

       axios.get(popularMovies).then((res) => setproduct(res.data.results))
  }, []);

      console.log(product);
  return (
    <div className="row justify-content-center">
       <h1>PopularMovie</h1>

       {product.map((i)=>{
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
        <Button >Read More</Button>

        
      </Card.Body>
    </Card>
            

        )
     })}
       
       
       </div>
  )
}

export default PopularMovie