import React from 'react';

const Todo = ({ tasks, removeTask, id }) => {
    return (
        <div className="todo">
            {tasks}
            <button onClick={() => removeTask(id)}>delete</button>
        </div>
    );
};

export default Todo;
