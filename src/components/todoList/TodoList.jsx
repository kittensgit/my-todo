import React from 'react';

import { Box } from '@mui/material';

import Todo from './Todo';

const TodoList = ({
    filteredAndSortedTasks,
    removeTask,
    toggleTodo,
    updateTask,
}) => {
    return (
        <Box marginBottom={'50px'}>
            {filteredAndSortedTasks.map((todo) => (
                <Todo
                    todo={todo}
                    createdAt={todo.createdAt}
                    key={todo.id}
                    id={todo.id}
                    tasks={todo.tasks}
                    complete={todo.complete}
                    removeTask={removeTask}
                    toggleTodo={toggleTodo}
                    updateTask={updateTask}
                />
            ))}
        </Box>
    );
};

export default TodoList;
