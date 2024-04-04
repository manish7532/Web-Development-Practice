import { useEffect } from "react";
import { useState } from "react"

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${pZero(hours)}:${pZero(minutes)}:${pZero(seconds)}`;
    }

    function pZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    return (
        <div>
            <span style={{ fontSize: '6rem' }}>{formatTime()}</span>
        </div>
    )
}

export default DigitalClock