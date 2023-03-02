import {data} from "./data";
import Buttons from "./Buttons";
import {useState} from "react";
import Pictures from "./Pictures";
import Footer from "./Footer";


function Home() {
const [perfume, setPerfume] = useState(data);
  const [show, setShow] = useState(false);
  
const changePerfume = (smell) => {
const newArray = data.filter(element => element.smell === smell);
setPerfume(newArray)
}
const changeGender = (gender) => {
const arr = data.filter(i => i.gender === gender);
setPerfume(arr) 
}
    return(
      <div >
        <div className="title">
          <h1>PERFUME SHOP</h1>
        </div>
        <Pictures/>
        <div className="title">
        <Buttons filtration={changePerfume} genderFiltration={changeGender}/>
        </div>
        <div className="container">
      {perfume.map((element => {
        const {id, gender, smell, image, description, name, volume, price} = element;
        return ( <div className="main">
          <div className="block">
          <h2>{name} (for {gender})</h2>
          <p>Smell: {smell}</p>
          <img src={image} alt="perfume" width="300px" height="250px"/>
          <div>
          <p>Description: {show ? description : description.substring(0,40) + "..."}
          <button onClick={() => setShow(!show)}>{show ? "Less" : "More"}</button></p>
          </div>
          </div>
            <p className="par">Volume: {volume}</p>
            <p className="par">Price: $ {price}</p>
        </div>)
      }))}
      </div>
<Footer/>

      </div>
    )
  }
  export default Home;