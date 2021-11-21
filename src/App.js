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

// const tabs = [
//     {
//         tabId: 0,
//         title: "School",
//         taskIds: []
//     },
//     {
//         tabId: 1,
//         title: "Chores",
//         taskIds: []
//     },
//     {
//         tabId: 2,
//         title: "Random",
//         taskIds: []
//     },
// ]

const tasks_collection = "william-la-tasks";
const tabs_collection = "william-la-tab";
function App() {
    const [tab, setTab] = useState("0");
    const [view, setView] = useState('all');
    const [sort, setSort] = useState('date');
    const query = db.collection(tabs_collection);
    const [value, loading, error] = useCollection(query);

    function handleTab(value) {
        setTab(value);
    }

    function handleView(value) {
        setView(value);
    }

    function handleSort(value) {
        setSort(value);
    }

    let tabs = null;
    if (value) {
        tabs = value.docs.map((doc) => doc.data());
    }

    // function sortQuery() {
    //     switch(sort) {
    //         case "priority":
    //             return db.collection(tasks_collection).orderBy(sort, 'desc');
    //         default:
    //             return db.collection(tasks_collection).orderBy(sort, 'asc');
    //     }
    // }

    // function getTasks() {
    //     switch(view) {
    //         case "completed":
    //             return value.docs.filter((doc) => doc.data().completed).map((doc) => {
    //                 return {...doc.data()}
    //             });
    //         case "uncompleted":
    //             return value.docs.filter((doc) => !doc.data().completed).map((doc) => {
    //                 return {...doc.data()}
    //             });
    //         default:
    //             return value.docs.map((doc) => doc.data());
    //     }
    // }

    // let tasks = null;
    // if (value) {
    //     tasks = getTasks();
    // }

    // // Deletes ALL tasks.
    // function handleDeleteAll(completedTasks) {
    //     completedTasks.map((task) => handleDeleteTask(task.id));

    // }

    // // Only deletes one task.
    // function handleDeleteTask(id) {
    //     db.collection(tasks_collection).doc(id).delete();
    // }

    // // Adds a new task to our data.
    // function handleNewTask(value, priority) {
    //     const newId = generateUniqueID();
    //     db.collection(tasks_collection).doc(newId).set({
    //         id: newId,
    //         title: value,
    //         completed: false,
    //         priority: priority,
    //         date: Date().toLocaleString(),
    //         tabNum: tab
    //     })
    //     addTaskToTab(newId);
    // }

    // // Edits a task value.
    // function handleEdit(id, field, value) {
    //     const doc = db.collection(tasks_collection).doc(id);
    //     doc.update({
    //         [field]: value,
    //     })
    // }

    // function addTaskToTab(taskId) {
    //     const doc = db.collection(tabs_collection).doc(tab);
    //     let newTaskIds = doc.get("taskIds");
    //     newTaskIds.push(taskId)
    //     doc.update({
    //         taskIds: newTaskIds
    //     });
    // }

    // Delete a tab and all of the tasks belong to it.
    function handleDeleteTab(tabId) {
        // Delete all tasks belong to tab
        const tabDoc = db.collection(tabs_collection).doc(tabId);
        // const tabTasks = tabDoc.get("taskIds");
        // if (tabTasks.length > 0) {
        //     tabTasks.map((task) => db.collection(tasks_collection).doc(task).delete());
        // }
        // Delete tab
        tabDoc.delete();
        handleTab("0");
    }

    // Adds a new tab.
    function handleNewTab(value) {
        const newId = generateUniqueID();
        db.collection(tabs_collection).doc(newId).set({
            tabId: newId,
            title: value
        })
    }

    return <div>
        {tabs && <Header view={handleView}
                sort={handleSort}
                tab={tab}
                handleTab={handleTab}
                tabs={tabs}
                handleDeleteTab={handleDeleteTab}
                handleNewTab={handleNewTab}
                />}
        {loading && <h1>Loading</h1>}
        {!loading && <List 
                view={view}
                sort={sort}
                tab={tab}
                db={db}
                // addTaskToTab={addTaskToTab}
                // list={tasks.filter(task => task.tabNum === tab)}
                // onEdit={handleEdit}
                // onNewTask={handleNewTask}
                // onDeleteAll={handleDeleteAll}
                // onDeleteTask={handleDeleteTask}
            />
        }
    </div>;
}
export default App;
