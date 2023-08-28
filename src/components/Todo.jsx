import React from 'react';

const Todo = ({ tasks, id, removeTask, toggleTodo, complete }) => {
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
