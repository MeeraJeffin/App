import React, { useEffect, useState } from 'react'
import { comedyMovies, imageUrl } from '../Url';
import { Button, Card } from 'react-bootstrap';
import axios from "axios"

const ComedyMovie = () => {
  const [product, setproduct] = useState([])
  
  
  useEffect(() => {

       axios.get(comedyMovies).then((res) => setproduct(res.data.results))
  }, []);

      console.log(product);
  return (
    <div className="row justify-content-center">
    <h1>ComedyMovies</h1>

    {product.map((i)=>{
    return(
        
            <Card style={{ width: '18rem', border:"1px solid black",
            margin:"10px",
            padding:"20px",
            float:"left" }}>
  <Card.Img variant="top" src={imageUrl+i.poster_path} style={{height:"200px"}} />
  <Card.Body>
    <Card.Title>{i?.original_title}</Card.Title>
    <Card.Text>{i.id}</Card.Text>
    <Card.Text>{i.popularity}</Card.Text>
    <Card.Text>{i.release_date}</Card.Text>
    <Button variant="primary">Read More</Button>

    
  </Card.Body>
</Card>
        

    )
 })}
</div>
  )
}

export default ComedyMovie