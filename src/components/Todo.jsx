import React from 'react';

const Todo = ({ tasks, id }) => {
    return (
        <div className="todo">
            {tasks}
            <button>delete</button>
        </div>
    );
};

export default Todo;
