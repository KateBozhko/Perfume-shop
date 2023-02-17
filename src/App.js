import { data } from "./data";
import { useState } from "react";
import "./App.css"
import Buttons from "./Buttons";
import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Contact from "./Contact";
import About from "./About";


function App() {
  return(
<Router>
<nav>
<Link to="/">Shop</Link>
<Link to="/about">About us</Link>
<Link to="/contact">Our contacts</Link>
</nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
</Router>
  )
}

export default App;