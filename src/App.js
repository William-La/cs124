import './style.css';

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
        title: "Get very high",
        completed: false
    }
];



function App() {
    const [data, setData] = useState(initialData);
   
    return <div>
        <h1> {data[0].title}</h1>
        </div>;
}

export default App;
