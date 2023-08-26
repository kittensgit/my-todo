import React from 'react';

const Todo = ({ id, tasks, deleteTodo, completeTodo, complete }) => {
    return (
        <div className="todo">
            <div
                className={complete ? 'complete' : ''}
                onClick={() => {
                    completeTodo(id);
                }}
            >
                {tasks}
            </div>
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
