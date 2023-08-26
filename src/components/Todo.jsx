import React from 'react';

const Todo = ({ tasks }) => {
    return (
        <div className="todo">
            <div>{tasks}</div>
            <button>delete</button>
        </div>
    );
};

export default Todo;
