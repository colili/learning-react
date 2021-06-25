import React, { useRef, useState } from 'react'

export default function RefExample() {
    const [value, setValue] = useState(0)
    const ref = useRef()
    const prev = useRef(null) // used to store some value
    return(
        <div>
            <input ref={ref}/>
            <button onClick={()=>{ref.current.focus()}}>Focus on the Input</button>

            <hr/>
            <p>Current value: {value}</p>
            <p>Previous value: {prev.current}</p>
            <button onClick={()=>
                setValue(x => {prev.current=x; return x+1})
                }>
            Add
            </button>
            <button onClick={()=>setValue(x => {prev.current=x; return 0})}>Remove</button>
        </div>
    )
} 