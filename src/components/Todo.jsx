import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';

const Todo = ({
    todo,
    tasks,
    removeTask,
    id,
    complete,
    toggleTodo,
    updateTask,
}) => {
    const [isEdit, setIsEdit] = useState(false);

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <div className="todo">
            {isEdit ? (
                <EditTodoForm
                    todo={todo}
                    updateTask={updateTask}
                    toggleEdit={toggleEdit}
                />
            ) : (
                <>
                    <div
                        className={complete ? 'complete' : ''}
                        onClick={() => toggleTodo(id)}
                    >
                        {tasks}
                    </div>
                    <div>
                        <button onClick={toggleEdit}>edit</button>
                        <button
                            className="delete"
                            onClick={() => removeTask(id)}
                        >
                            delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Todo;
