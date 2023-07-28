import React from 'react';

const Todo = ({ tasks, id, deleteTodo, toggleTodo, complete }) => {
    return (
        <div className="todo">
            <p
                onClick={() => {
                    toggleTodo(id);
                }}
                className={complete ? 'complete' : ''}
            >
                {tasks}
            </p>
            <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
    );
};

export default Todo;
