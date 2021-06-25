import React, { useState, useEffect } from 'react'

export default function EffectExample() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const I = setInterval(()=>{
            console.log(count);
            setCount(x => x+1)
        }, 1000)
        return () => {
            clearInterval(I)
        }
    }, [count])

    return (
        <div>
            Count is: {count}
        </div>
    )
}