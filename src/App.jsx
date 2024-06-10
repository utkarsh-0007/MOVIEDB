import React from "react";import './App.css'
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Tv from "./Components/Tv";
import About from "./About";
import Search from "./Search";


function App() {
  return (
    <div className="App">
      



      <Router>
          <Navbar />

        
        <Routes>




          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/tv" element={<Tv/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/search" element={<Search/>} />
          {/* <Route path='/' element={<>Not found</>} /> */}
          <Route path="*" element={<NotFound/>} />

          
        </Routes>
      </Router>
    </div>
  );
}

function     NotFound(){
  return(
  <div className="notfound">
    <h1>REQUESTED PAGE NOT FOUND</h1>
  </div>
  )
}

export default App;