import { useState } from 'react'
import { useEffect } from 'react'


function MyUseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if(count>=1){
        document.title = `Chats(${count})`
    }else{
        document.title = `Chats`
    }
    }, [count])

    return (
        <div>
            <p>count is {count}</p>
            <button className='' onClick={() => setCount((count) => count + 1)}>
                Increase
            </button>&nbsp; &nbsp;
            <button onClick={() => setCount((count) => count - 1)}>
                Decrease
            </button>
        </div>
    )
}

export default MyUseEffect