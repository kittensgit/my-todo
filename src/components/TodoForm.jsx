import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='enter task...' value={value} onChange={handleChangeValue} />
            <button onClick={() => { addTodo(value) }}>add</button>
        </div>
    )
}

export default TodoForm