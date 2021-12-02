import React from "react";
import Header from './Header';
import List from './List';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { useState } from 'react';
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
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
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


function App(props) {
    const [user, loading, error] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
        window.alert('email sent')
    }

    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            {user.displayName || user.email}
            <SignedInApp {...props} user={user}/>
            <button type="button" onClick={() => auth.signOut()}>Logout</button>
            {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
        </>
    }
}

const FAKE_EMAIL = 'wla@hmc.edu';
const FAKE_PASSWORD = '123456';

function SignIn() {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }
    return <div>
        {error && <p>"Error logging in: " {error.message}</p>}
        <button onClick={() =>
            signInWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>Login with test user Email/PW
        </button>
        <button onClick={() =>
            auth.signInWithPopup(googleProvider)}>Login with Google
        </button>
    </div>
}

function SignUp() {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }
    return <div>
        {error && <p>"Error signing up: " {error.message}</p>}
        <button onClick={() =>
            createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>
            Create test user
        </button>

    </div>
}


const tasks_collection = "william-la-tasks";
const tabs_collection = "william-la-tab";
function SignedInApp(props) {
    const [tab, setTab] = useState("0");
    const [view, setView] = useState('all');
    const [sort, setSort] = useState('date');
    const query = db.collection(tabs_collection).where('owner', '==', props.user.uid);
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
            title: value,
            owner: props.user.uid
        })
    }
    if (error) {
        console.log(error.message);
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
