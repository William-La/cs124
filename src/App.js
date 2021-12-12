import React from "react";
import Header from './Header';
import List from './List';
import Login from './LoginModal';
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
            <button class="logoutButton" type="button" onClick={() => auth.signOut()}>Logout</button>
            {!user.emailVerified && <button class="verifyButton" type="button" onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
        </>
    }
}

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
    return <div class="sign-in">
        <div class="banner">
            <h1 id="title"> Todo </h1>

        {error && <p>"Error logging in: " {error.message}</p>}
        <div class="loginButton bouncy" style={{animationDelay: "0.07s", marginTop:"200px", display:"inherit"}}>
        {<Login login={signInWithEmailAndPassword}
                text="Login With Email/PW"
                buttonText="Login"/>}
        </div>

        <button class="signinButton bouncy" style={{animationDelay: "0.14s", marginTop:"200px", display:"inherit"}} onClick={() =>
            auth.signInWithPopup(googleProvider)}>LOGIN WITH GOOGLE
        </button>
      
        </div>
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
    return <div class="testUser">
        {error && <p>"Error signing up: " {error.message}</p>}
        <div class="signupButton bouncy" style={{animationDelay: "0.21s", marginTop:" -100px"}}>
        {<Login login={createUserWithEmailAndPassword}
                text="Sign Up With Email/PW"
                buttonText="Sign Up"/>}
         </div>
    </div>
}


const tabs_collection = "william-la-tab";
function SignedInApp(props) {
    const [tab, setTab] = useState("0");
    const [view, setView] = useState('all');
    const [sort, setSort] = useState('date');
    const query = db.collection(tabs_collection).where('sharedWith', 'array-contains', props.user.email);
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
    function handleDeleteTab(currentTab, owner) {
        if (props.user.uid !== owner) {
            handleUnshareTab(props.user.email, currentTab);
        } else {
        handleTab("0");
        const tabDoc = db.collection(tabs_collection).doc(currentTab.tabId);
        // Delete tab
        tabDoc.delete();
        }
    }

    // Adds a new tab.
    function handleNewTab(value) {
        const newId = generateUniqueID();
        db.collection(tabs_collection).doc(newId).set({
            tabId: newId,
            title: value,
            owner: props.user.uid,
            sharedWith: [props.user.email]
        })
    }

    // Shares a tab.
    function handleShareTab(value) {
        const doc = db.collection(tabs_collection).doc(tab);
        doc.update({
            sharedWith: firebase.firestore.FieldValue.arrayUnion(value),
        })
        window.alert("Shared list with user associated with email: " + value + "\n To remove user, please re-create your list.");
        }

    function handleUnshareTab(value, currentTab) {
        const doc = db.collection(tabs_collection).doc(currentTab.tabId);
        const newSharedWith = currentTab.sharedWith.filter(email => email !== value);
        console.log("newSharedWith: ");
        console.log(newSharedWith);
        doc.update({
            sharedWith: newSharedWith,
        })
        window.alert("Removed user associated with email: " + value +" from " + currentTab.title);
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
                handleShareTab={handleShareTab}
                user={props.user}
                currentTab={tabs.filter(curTab => curTab.tabId === tab)[0]}
                />}
        {loading && <h1>Loading</h1>}
        {tab==='0' ? 
            <h1>Create or select a list!</h1> :
            <List 
                view={view}
                sort={sort}
                tab={tab}
                db={db}
                user={props.user}
            />
        }
    </div>;
}
export default App;
