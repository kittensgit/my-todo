import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import { Box, Button, Checkbox, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

    const handleNameClick = () => {
        toggleTodo(id);
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };
    const getPriorityStyle = (priority) => {
        switch (priority) {
            case 'high':
                return { backgroundColor: '#ff2424' };
            case 'medium':
                return { backgroundColor: '#f3f320' };
            case 'easy':
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
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            icon={<CheckCircleOutlineIcon />}
                            checkedIcon={<CheckCircleIcon />}
                            onClick={handleNameClick}
                            checked={complete}
                        />
                        <Typography
                            sx={{ fontSize: '20px', color: '#2f2a2a' }}
                            className={complete ? 'complete' : ''}
                            onClick={handleNameClick}
                            variant="subtitle1"
                            role="button"
                        >
                            {tasks}
                        </Typography>
                    </Box>

                    <Typography
                        variant="caption"
                        sx={{
                            position: 'absolute',
                            top: '5px',
                            right: '0px',
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
                            placement="right"
                        >
                            <MoreVertIcon fontSize="small" />
                        </Tooltip>
                    </Typography>

                    <Typography variant="caption" sx={{ margin: '0 10px' }}>
                        <div
                            style={getPriorityStyle(todo.priority)}
                            className="circle"
                        ></div>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
