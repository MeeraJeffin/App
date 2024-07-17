import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

import { comedyMovies, latestMovies, popularMovies } from '../Url';
import axios from "axios"
import Movies from "./Movies"
import { useContext } from 'react';
import { Context } from '../App';


const PropswithNav = () => {
    const [popular, setpopular] = useState([])
    const [latest, setlatest] = useState([])
    const [comedy, setcomedy] = useState([])
    const {searchtest,setsearchtest,handlesearch} =useContext(Context)
    console.log(searchtest);
       useEffect(() => {

      axios.get(popularMovies).then((res) => setpopular(res.data.results))
 }, []);

 useEffect(() => {

  axios.get(latestMovies).then((res) => setlatest(res.data.results))
}, []);
    
useEffect(() => {

  axios.get(comedyMovies).then((res) => setcomedy(res.data.results))
}, []);
  return (
    <div>


   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#popular" ><Link to={"/Moviespopular"} style={{textDecoration:"none",color:"black"}}>Popular movies</Link></Nav.Link>
            <Nav.Link href="#latest"><Link to={"/Movieslatest"} style={{textDecoration:"none",color:"black"}}>Latest movies</Link></Nav.Link>
            <Nav.Link href="#comedy"><Link to={"/Moviescomedy"} style={{textDecoration:"none",color:"black"}}>Comedy movies</Link></Nav.Link>
            <input type="text" value={searchtest} onChange={(e)=>setsearchtest(e.target.value)} />
            <button onClick={handlesearch}>search</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  )
}

export default PropswithNav