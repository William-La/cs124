import React from "react";
import Task from "./Task";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import OurModal from "./OurModal"
import "./List.css";
import { useState } from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { IconButton } from "@mui/material";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDaolr_3LqraFXNZYmnYQUe7nDwsfmSeKc",
    authDomain: "cs124-5bd85.firebaseapp.com",
    projectId: "cs124-5bd85",
    storageBucket: "cs124-5bd85.appspot.com",
    messagingSenderId: "685729994391",
    appId: "1:685729994391:web:e906e2c8b867558397fbd2",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
//   authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
//   projectId: "hmc-cs124-fa21-labs",
//   storageBucket: "hmc-cs124-fa21-labs.appspot.com",
//   messagingSenderId: "949410042946",
//   appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

const style = {
    fontSize: "100px",
    '@media (max-width: 686px)': {
      fontSize: "100px !important",
    }
  }

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const tasks_collection = "william-la-tasks";
const tabs_collection = "william-la-tab";

function List(props) {
    // const db = props.db;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const query = sortQuery().where('owner', '==', props.user.uid);
    const [value, loading, error] = useCollection(query);

    function sortQuery() {
        switch(props.sort) {
            case "priority":
                return db.collection(tabs_collection).doc(props.tab).collection(tasks_collection).orderBy(props.sort, 'desc');
            default:
                return db.collection(tabs_collection).doc(props.tab).collection(tasks_collection).orderBy(props.sort, 'asc');
        }
    }

    function getTasks() {
        switch(props.view) {
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
        tasks = getTasks().filter(task => task.tabNum === props.tab);
    }

    // Deletes ALL tasks.
    function handleDeleteAll(completedTasks) {
        completedTasks.map((task) => handleDeleteTask(task.id));

    }

    // Only deletes one task.
    function handleDeleteTask(id) {
        db.collection(tabs_collection).doc(props.tab).collection(tasks_collection).doc(id).delete();
    }

    // Adds a new task to our data.
    function handleNewTask(value, priority) {
        const newId = generateUniqueID();
        db.collection(tabs_collection).doc(props.tab).collection(tasks_collection).doc(newId).set({
            id: newId,
            title: value,
            completed: false,
            priority: priority,
            date: Date().toLocaleString(),
            tabNum: props.tab,
            owner: props.user.uid
        })
    }

    // Edits a task value.
    function handleEditTask(id, field, value) {
        const doc = db.collection(tabs_collection).doc(props.tab).collection(tasks_collection).doc(id);
        doc.update({
            [field]: value,
        })
    }

    function handleSubmit(input, priority) {
      handleNewTask(input, priority);
      handleClose();
    }
    console.log(error);
    return <div>
      {loading && <h1>Task Loading</h1>}
        <div  class="todo-body">
      {tasks && <>
            {tasks.map(a => <Task {...a} key={a.id} onEdit={handleEditTask} onDeleteTask={handleDeleteTask}/>)}
            {/* Different values have different actions for our circle button at the bottom. */}
      </>}
      {props.view === "completed" ?
           <button class="aria-button" aria-label="delete tasks" type="submit" onKeyPress={() => handleDeleteAll(tasks)}>
           <RemoveCircleIcon  style={style}
                              onClick={() => handleDeleteAll(tasks)}/>
            </button>:
           <button class="aria-button" aria-label="new tasks" type="submit" onKeyPress={handleOpen}>
           <AddCircleIcon 
  
                           style={style}
                           onClick={handleOpen}/>
          </button>}
            <div>
              {/* Creates a Modal to add a new task. */}
              <OurModal 
                open={open}
                placeholder={"Enter a new task"}
                modalText={"Please enter a new task"}
                submitText={"Create Task"}
                closeText={"Cancel"}
                handleAction={handleSubmit}
                handleClose={handleClose}
                title=''
                priority='2'
                newItem={true}
              />
      </div>
    </div>
    </div>
}

export default List;