import React from 'react';

const Todo = ({ tasks, removeTask, id, complete, toggleTodo }) => {
    return (
        <div className="todo">
            <div
                className={complete ? 'complete' : ''}
                onClick={() => toggleTodo(id)}
            >
                {tasks}
            </div>
            <button onClick={() => removeTask(id)}>delete</button>
        </div>
    );
};

export default Todo;
