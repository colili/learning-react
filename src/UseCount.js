import { useState } from 'react'

export function useAddCount(initialValue) {
    const [count, setCount] = useState(initialValue)
    return [count, () => setCount(x => x + 1)]
}