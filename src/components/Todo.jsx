import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
    const getPriorityStyle = (priority) => {
        switch (priority) {
            case 'high':
                return { backgroundColor: '#ff2424' };
            case 'medium':
                return { backgroundColor: '#f3f320' };
            case 'ease':
                return { backgroundColor: '#2fbe2f' };
            default:
                return {};
        }
    };
    return (
        <Box
            sx={{
                p: 2,
                border: '1px dashed grey',
                position: 'relative',
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

                    <Typography
                        variant="caption"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: '11px',
                            padding: '4px',
                        }}
                    >
                        <Tooltip
                            title={`Created: ${
                                todo.createdAt
                                    ? new Date(todo.createdAt).toLocaleString()
                                    : 'None'
                            } | Edited: ${
                                todo.updatedAt
                                    ? new Date(todo.updatedAt).toLocaleString()
                                    : 'None'
                            }`}
                            placement="bottom"
                        >
                            <MoreHorizIcon fontSize="small" />
                        </Tooltip>
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="caption" marginRight={2}>
                            <div
                                style={getPriorityStyle(todo.priority)}
                                className="circle"
                            ></div>
                        </Typography>
                        <Button onClick={toggleEdit}>
                            <EditIcon />
                        </Button>
                        <Button
                            className="delete"
                            onClick={() => removeTask(id)}
                        >
                            <DeleteIcon />
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Todo;
