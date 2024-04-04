import { useEffect, useState } from "react"

function MyUseEffect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count = ${count} `
    }, [count])

    function addCount() {
        setCount(c => c + 1)
    }
    function delCount() {
        setCount(c => c - 1)
    }

    return (
        <div className="align-items-center justify-content-center text-center d-flex flex-column">
            <p>{count}</p>
            <button className="btn btn-sm btn-light" onClick={addCount}>Increase Count</button>
            <button className="btn btn-sm btn-danger mt-3" onClick={delCount}>Decrease Count</button>
        </div>
    )
}

export default MyUseEffect