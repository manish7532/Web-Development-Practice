import { useEffect } from "react"
import { useState } from "react"

function MyUseEffect2() {

    const [width, setWidth] = useState(window.screen.width)
    const [height, setHeight] = useState(window.screen.height)

    const DscreenSize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", DscreenSize)

        return () => {
            window.removeEventListener("resize", DscreenSize)
        }

    }, [width, height])


    useEffect(() => {
        document.title = `${width}x${height}`;
    }, [width, height]);


    return (
        <div>
            <p>SccrenSize = {width} x {height}</p>
        </div>
    )
}

export default MyUseEffect2