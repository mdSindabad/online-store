import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
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
    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

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
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;