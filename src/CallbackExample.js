import React, { useState, useCallback } from 'react'

const s = new Set()
export default function CallbackExample() {
    const [count, setCount] = useState(0)
    const add = useCallback(
        () => {
            s.add(add)
            console.log('size:', s.size);
            setCount(x => x+1)
        },
        [],
    )

    return(
        <div>
            <p>Current count: {count}</p>
            <button onClick={add}>+</button>
        </div>
    )
}