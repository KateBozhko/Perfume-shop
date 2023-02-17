


function Buttons({filtration, genderFiltration}) {

    
    return(
        <div>
            <button onClick={() => filtration("flower")}>Flower smell</button>
            <button onClick={() => filtration("wood")}>Wood Smell</button>
            <button onClick={() => filtration("fruit")}>Fruit smell</button>
            <button onClick={() => filtration("fresh")}>Fresh smell</button>
            <button onClick={() => genderFiltration("Women")}>FOR HER</button>
            <button onClick={() => genderFiltration("Men")}>FOR HIM</button>
        </div>
    )
}
export default Buttons;