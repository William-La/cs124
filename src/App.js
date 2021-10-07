import './style.css';
import Header from './Header';
import List from './List';

// import People from './People';

import { useState } from 'react';

const initialData = [
    {
        id: "0",
        title: "William spills the tea",
        completed: false
    },
    {
        id: "1",
        title: "Get very happy",
        completed: true
    },
    {
        id: "2",
        title: "Grab dinner with 121",
        completed: false
    },
    {
        id: "3",
        title: "Rename ourselves",
        completed: false
    },
];




function App() {
    const [data, setData] = useState(initialData);
   

    function handleNewTask(task) {
        setData([...data, {
            id: "4",
            title: task,
            completed: false
        }
        
        
        ])
    }
    return <div>
        <Header/>
        <List list={data}
                onNewTask={handleNewTask}
        
        />
        </div>;
}

export default App;
