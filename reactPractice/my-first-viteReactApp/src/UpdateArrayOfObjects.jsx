import { useState } from "react"

function UpdateArrayOfObjects() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carCompany, setCarCompany] = useState("")
    const [carModel, setCarModel] = useState("")

    function addCar() {
        const newCar = {
            year: carYear,
            company: carCompany,
            model: carModel
        }

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarCompany("")
        setCarModel("")
    }

    function removeCar(index) {
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(event) {
        setCarYear(event.target.value)
    }

    function handleCompanyChange(event) {
        setCarCompany(event.target.value)
    }

    function handleModelChange(event) {
        setCarModel(event.target.value)
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.company} {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} />
            <input type="text" value={carCompany} onChange={handleCompanyChange} placeholder="Enter Car company" />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" />

            <button className="btn btn-sm btn-primary" onClick={addCar}>AddCar</button>
        </div>
    )
}

export default UpdateArrayOfObjects