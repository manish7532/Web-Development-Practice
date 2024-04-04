import { useState } from "react";

// usestate Hook
function MyComponent() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Mad Manu")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toogleEmployeeStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name:{name}</p>
            <button className="btn btn-light btn-sm" onClick={updateName}>setName</button>
            <p>Age:{age}</p>
            <button className="btn btn-sm btn-light" onClick={incrementAge}>IncrementAge</button>
            <p>Is Employed:{isEmployed ? "Yes" : "No"}</p>
            <button className="btn btn-sm btn-light" onClick={toogleEmployeeStatus}>Toggle Status</button>
        </div>

    )
}

export default MyComponent