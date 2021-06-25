import React, { useState } from 'react'

import { useAddCount } from './UseCount'

export default function StateExample() {
    const [count, setCount] = useState(0)
    const [count1, addCount] = useAddCount(0)

    return (
        <div>
            <p>You clicked {count} times.</p>
            <input type='text' value={count}/>
            <button onClick={() => setCount(x=>x+1)}>+</button>

            {/* 自定义Hook */}
            <p>You clicked {count1} times</p>
            <button onClick={() => addCount(count1)}>+</button>
        </div>
    )
}