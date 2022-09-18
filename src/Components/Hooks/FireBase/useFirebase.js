import initializeAuthentication from "./firebase.initialization"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


initializeAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const navigate = useNavigate();
  
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/home');
                setError('');

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            });

    }
    const createAccountWithEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                updateUserProfile(name);

                alert('Successfully Created Account. Please try to remember Email and Password for future Sing-In');
                navigate('/home');
                setError('');


            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    const emailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate('/home');
                setError('');
                console.log(user);


            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error);
        });

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError('')
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);

            } else {
                // User is signed out

            }
        });
    }, [])


    return {
        googleSignIn,
        setUser,
        user,
        createAccountWithEmail,
        setEmail,
        setPassword,
        setName,
        logOut,
        emailSignIn,
        error
    }

}
export default useFirebase;