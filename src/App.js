import React from "react";
import Header from './Header';
import List from './List';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { useState } from 'react';
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import { getAnalytics } from "firebase/analytics";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaolr_3LqraFXNZYmnYQUe7nDwsfmSeKc",
    authDomain: "cs124-5bd85.firebaseapp.com",
    projectId: "cs124-5bd85",
    storageBucket: "cs124-5bd85.appspot.com",
    messagingSenderId: "685729994391",
    appId: "1:685729994391:web:e906e2c8b867558397fbd2",
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


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

    // Delete a tab and all of the tasks belong to it.
    function handleDeleteTab(tabId) {
        const tabDoc = db.collection(tabs_collection).doc(tabId);
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
            />
        }
    </div>;
}
export default App;
