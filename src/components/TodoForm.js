import React, { useState } from "react";

const TodoForm = ({addTask}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Enter value"
            />
            <button>save</button>
        </form>
    )
}

export default TodoForm;