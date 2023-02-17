import {data} from "./data";
import Buttons from "./Buttons";
import {useState} from "react";


function Home() {
const [perfume, setPerfume] = useState(data);
  
  
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
        <div className="title">
        <Buttons filtration={changePerfume} genderFiltration={changeGender}/>
        </div>
        <div className="container">
      {perfume.map((element => {
        const {id, gender, smell, image, description, name, volume, price} = element;
        return ( <div>
          <div className="block">
          <h2>{name} (for {gender})</h2>
          <p>Smell: {smell}</p>
          <img src={image} alt="perfume" width="300px" height="250px"/>
          <p>Description: {description.substring(0,50) + "..."}
          <button>Show more</button></p>
          </div>
            <p>Volume: {volume}</p>
            <p>Price: $ {price}</p>
        </div>)
      }))}
      </div>
      </div>
    )
  }
  export default Home;