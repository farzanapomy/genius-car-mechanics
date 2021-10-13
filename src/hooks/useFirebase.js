import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeAthentication from '../Pages/Login/Firebase/firebase.init'

initializeAthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();

    const singInUingGoole = () => {
        const googleProvider =new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }


    // observe user state change 
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return ()=> unSubscribed;
    }, [])




    return {
         user,
        singInUingGoole,
        logOut

    }
}

export default useFirebase;