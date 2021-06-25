import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'sub':
            return state >0? state - 1: state;
        default:
            return state;
    }
}

export default function ReducerExample () {
    const [count, dispatch] = useReducer(reducer, 0)

    return(
        <div>
            Your count is {count}
            <button onClick={()=>dispatch({type: 'add'})}>+</button>
            <button onClick={()=>dispatch({type: 'sub'})}>-</button>
        </div>
    )
}