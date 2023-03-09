import "./App.css"
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
  <img className="logo" src="https://img.freepik.com/free-vector/luxurious-floral-perfume-logo-template_23-2148466518.jpg?w=740&t=st=1677668216~exp=1677668816~hmac=0a0bc31621873d76e0ab31c1ec14a7c1ca3f8f853dc6d0fc75b5d6132a8dc3df" width="100px" alt="logo"/>
<Link to="/" className="link">Shop</Link>
<Link to="/about" className="link">About us</Link>
<Link to="/contact" className="link">Our contacts</Link>
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