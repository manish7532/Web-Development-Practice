import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return (
        <div className="row justify-content-center m-0">
            <div className="col-6 text-center">
            <div className="text-center">
                <h4 style={{fontSize:'7em'}}>{count}</h4>
                </div>
                <div className="text-center">
                    <button className="btn btn-success d-inline-block" onClick={increment}>Increment</button>&nbsp;
                    <button className="btn btn-light d-inline-block" onClick={reset}>Reset</button>&nbsp;
                    <button className="btn btn-danger d-inline-block" onClick={decrement}>Decrement</button>&nbsp;
                </div>
            </div>
        </div>
    )
}

export default Counter