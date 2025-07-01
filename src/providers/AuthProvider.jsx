
import {createContext,useState,    useEffect} from "react"
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,onAuthStateChanged ,signOut} from "firebase/auth";
import app from './../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
  const  unSubscribe = onAuthStateChanged(auth, currentUser=>{
           console.log("user on the state change", currentUser);
           setUser(currentUser)
           setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo= {
        user,
        createUser,
        signInUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;