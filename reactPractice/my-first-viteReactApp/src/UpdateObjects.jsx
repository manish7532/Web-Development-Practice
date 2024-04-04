import { useState } from "react"


function UpdateObjects() {

    const [car, setCar] = useState(
        {
            year: 2024,
            company: 'Ford',
            model: 'Mustang'
        }
    )

    const handleYear = (e) => {
        setCar(c => ({ ...c, year: e.target.value }))
    }
    
    const handleCompany = (e) => {
        setCar(c => ({ ...c, company: e.target.value }))
    }
    
    const handleModel = (e) => {
        setCar(c => ({ ...c, model: e.target.value }))
    }


    return (
        <div className="d-flex w-75 flex-column justify-content-center align-items-center">
            <p>Your Favorite Car Is : {car.year} {car.company} {car.model}</p>

            <input className="form-control" type="number" value={car.year} onChange={handleYear} />
            <input className="form-control" type="text" value={car.company} onChange={handleCompany} />
            <input className="form-control" type="text" value={car.model} onChange={handleModel} />
        </div>
    )
}

export default UpdateObjects