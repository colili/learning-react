import React, { useState, useEffect } from 'react'

function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}

async function getPersons() {
    await sleep(2000)
    return ['Alice', 'Bob', 'Colin']
}

function usePersons() {
    const [persons, setPersons] = useState(null)
    async function request() {
        const persons = await getPersons()
        setPersons(persons)
    }
    useEffect(request, [])
    return persons
}

export default function CustomizeHook() {
    const persons = usePersons()
    if (persons === null) {
        return <div>Loading...</div>
    }
    return(
        <div>
            <ul>
                {persons.map((item, index) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}