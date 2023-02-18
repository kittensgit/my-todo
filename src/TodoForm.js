import React, { useState } from 'react'

export default function TodoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                value={userInput}
                type='text'
                onChange={handleChange}
                placeholder='enter value'/>
                <button>save</button>
            </form>
        </div>
    )
}
