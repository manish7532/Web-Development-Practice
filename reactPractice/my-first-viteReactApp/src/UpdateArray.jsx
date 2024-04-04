import { useState } from "react"

function UpdateArray() {

    const [foods, setFoods] = useState(['Apple', 'Banana', 'Orange'])

    function addFood(){
        const newFood = document.querySelector('#foodInput').value;
        document.querySelector('#foodInput').value = ""
        setFoods(f => [...f, newFood])
    }

    function removeFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h2>List Of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => removeFood(index)}>
                        {food}
                    </li>
                )}
            </ul>

            <input type="text" className="from-control" id="foodInput"  placeholder="Enter Food Name"/>
            <button className="btn btn-primary btn-sm" onClick={addFood}>Add Food</button>
        </div>
    )
}

export default UpdateArray