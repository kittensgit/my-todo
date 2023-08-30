import React from 'react';

const Todo = ({ tasks }) => {
    return (
        <div className="todo">
            {tasks}
            <button>delete</button>
        </div>
    );
};

export default Todo;
