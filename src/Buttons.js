
import "./App.css"

function Buttons({filtration, genderFiltration}) {

    
    return(
        <div>
            <button className="btn" onClick={() => filtration("flower")}>Flower smell</button>
            <button className="btn" onClick={() => filtration("wood")}>Wood Smell</button>
            <button className="btn" onClick={() => filtration("fruit")}>Fruit smell</button>
            <button className="btn" onClick={() => filtration("fresh")}>Fresh smell</button>
            <button className="btn" onClick={() => genderFiltration("Women")}>FOR HER</button>
            <button className="btn" onClick={() => genderFiltration("Men")}>FOR HIM</button>
        </div>
    )
}
export default Buttons;