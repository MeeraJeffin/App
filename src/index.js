import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project1 from './Project start/Project1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovie from './Project start/PopularMovie';
import LatestMovie from './Project start/LatestMovie';
import ComedyMovie from './Project start/ComedyMovie';
import PropswithNav from './Project start/PropswithNav';
import Movies from './Project start/Movies';
import { comedyMovies, latestMovies, popularMovies } from './Url';
import Banner from './Project start/Banner';
import RandomBanner from './Project start/RandomBanner';
import Details from './Project start/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    {/* <Project1 /> */}
    {/* <BrowserRouter>
    <Project1 />
    <Routes>
      <Route  path="/popular" element={<PopularMovie />} />
      <Route  path="/latest" element={<LatestMovie />} />
      <Route  path="/comedy" element={<ComedyMovie />} />
    </Routes>
    </BrowserRouter> */}
   
   

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
