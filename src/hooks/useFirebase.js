import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initilizeAuthentication from "../firebase/firebase.init";

initilizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    // login using google
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(results => setUser(results.user))
            .catch(err => console.log(err))
    };

    // register with email and password
    const registerWithEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(response => {
                        setUser(response);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
    };

    // login with email and password
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch(err => console.log(err));
    };

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    };

    // observe users change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe
    }, []);

    return {
        user,
        registerWithEmail,
        loginWithEmail,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;