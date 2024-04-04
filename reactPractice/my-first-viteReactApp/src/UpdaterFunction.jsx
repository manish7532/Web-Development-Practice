import { useState } from "react"

function UpdaterFunction() {

    const [count, setCount] = useState(0)
    // for safe update, update with according to prev state 
    const increment = () => {
        if (count < 20) {
            setCount(c => c + 1)
            setCount(c => c + 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(c => c - 1)
            setCount(c => c - 1)
        }
    }


    return (
        <div className="row justify-content-center m-0">
            <div className="col-6 text-center">
                <div className="text-center">
                    <h4 style={{ fontSize: '7em' }}>{count}</h4>
                </div>
                <div className="text-center">
                    <button className="btn btn-success d-inline-block" onClick={increment}>Increment+2</button>&nbsp;
                    <button className="btn btn-light d-inline-block" onClick={reset}>Reset</button>&nbsp;
                    <button className="btn btn-danger d-inline-block" onClick={decrement}>Decrement-2</button>&nbsp;
                </div>
            </div>
        </div>
    )
}

export default UpdaterFunction