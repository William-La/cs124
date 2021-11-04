import React from "react";
import Header from './Header';
import List from './List';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { useState } from 'react';
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcQ6XCOvMIA7pHME4bWBgy_7OVy_7XErA",
    authDomain: "cs124-fall2021.firebaseapp.com",
    projectId: "cs124-fall2021",
    storageBucket: "cs124-fall2021.appspot.com",
    messagingSenderId: "264318304667",
    appId: "1:264318304667:web:4be8d27a02811b1ccd613e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const name = "william-la-tasks";
function App() {
    const [view, setView] = useState('all');
    const [sort, setSort] = useState('date');
    const query = sortQuery();
    const [value, loading, error] = useCollection(query);

    function handleView(value) {
        setView(value);
    }

    function handleSort(value) {
        setSort(value);
    }

    function sortQuery() {
        switch(sort) {
            case "title":
                return db.collection(name).orderBy(sort, 'asc');
            default:
                return db.collection(name).orderBy(sort, 'desc');
        }
    }

    function getTasks() {
        switch(view) {
            case "completed":
                return value.docs.filter((doc) => doc.data().completed).map((doc) => {
                    return {...doc.data()}
                });
            case "uncompleted":
                return value.docs.filter((doc) => !doc.data().completed).map((doc) => {
                    return {...doc.data()}
                });
            default:
                return value.docs.map((doc) => doc.data());
        }
    }

    let tasks = null;
    if (value) {
        tasks = getTasks();
    }

    // Deletes ALL tasks.
    function handleDeleteAll(completedTasks) {
        completedTasks.map((task) => handleDeleteTask(task.id));

    }

    // Only deletes one task.
    function handleDeleteTask(id) {
        db.collection(name).doc(id).delete();
    }

    // Adds a new task to our data.
    function handleNewTask(value, priority) {
        const newId = generateUniqueID();
        db.collection(name).doc(newId).set({
            id: newId,
            title: value,
            completed: false,
            priority: priority,
            date: Date().toLocaleString()  
        })
    }

    // Edits a task value.
    function handleEdit(id, field, value) {
        const doc = db.collection(name).doc(id);
        console.log("editing");
        doc.update({
            [field]: value,
        })
    }

    return <div>
        <Header view={handleView} sort={handleSort}/>
        {loading && <h1>Loading</h1>}
        {tasks && <List 
                list={tasks}
                onNewTask={handleNewTask}
                onEdit={handleEdit}
                onDeleteTask={handleDeleteTask}
                onDeleteAll={handleDeleteAll}
                view={view}
            />
        }
    </div>;
}
export default App;
