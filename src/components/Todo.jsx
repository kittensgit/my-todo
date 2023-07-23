import React from 'react'

const Todo = ({tasks, id}) => {
    return (
        <div className='todo'>
            <p>{tasks}</p>
            <button>delete</button>
        </div>
    )
}

export default Todo