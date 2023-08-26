import React from 'react';

const Todo = ({ id, tasks, deleteTodo }) => {
    return (
        <div className="todo">
            <div>{tasks}</div>
            <button
                onClick={() => {
                    deleteTodo(id);
                }}
            >
                delete
            </button>
        </div>
    );
};

export default Todo;
