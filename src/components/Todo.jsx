import React from 'react';

const Todo = ({ tasks, id, removeTask }) => {
    return (
        <div className="todo">
            {tasks}
            <button onClick={() => removeTask(id)}>delete</button>
        </div>
    );
};

export default Todo;
