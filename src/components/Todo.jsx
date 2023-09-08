import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
        <Box
            sx={{
                p: 2,
                border: '1px dashed grey',
            }}
            className="todo"
        >
            {isEdit ? (
                <EditTodoForm
                    todo={todo}
                    updateTask={updateTask}
                    toggleEdit={toggleEdit}
                />
            ) : (
                <>
                    <Typography
                        className={complete ? 'complete' : ''}
                        onClick={() => toggleTodo(id)}
                        variant="subtitle1"
                        gutterBottom
                    >
                        {tasks}
                    </Typography>

                    <div>
                        <Button onClick={toggleEdit}>
                            <EditIcon />
                        </Button>
                        <Button
                            className="delete"
                            onClick={() => removeTask(id)}
                        >
                            <DeleteIcon />
                        </Button>
                    </div>
                </>
            )}
        </Box>
    );
};

export default Todo;
