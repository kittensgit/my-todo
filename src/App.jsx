import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

    return <div className="App">App</div>;
};

export default App;
