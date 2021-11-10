import React from "react";
import Header from './Header';
import List from './List';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { useState } from 'react';
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
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
            case "priority":
                return db.collection(name).orderBy(sort, 'desc');
            default:
                return db.collection(name).orderBy(sort, 'asc');
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
        doc.update({
            [field]: value,
        })
    }

    return <div>
        <Header view={handleView} sort={handleSort}/>
        {loading && <h1>Loading</h1>}
        {tasks && <List 
                view={view}
                list={tasks}
                onEdit={handleEdit}
                onNewTask={handleNewTask}
                onDeleteAll={handleDeleteAll}
                onDeleteTask={handleDeleteTask}
            />
        }
    </div>;
}
export default App;
