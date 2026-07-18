import React from 'react'
import { useState, useEffect } from 'react'

const User = ({ name }) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("1st")
        }, 1000)

        return () => {
            clearInterval(timer)
            // console.log("2nd")
        }
    }, [])

    // console.log("3rd")

    return (
        <div className='user-card'>
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Mumbai</h3>
            <h4>Contact: _karan.s.s</h4>
        </div>
    )
}

export default User
