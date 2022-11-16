
import { useState, useEffect } from 'react';
import { GoogleAuthProvider,getAuth,signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

import app from './../components/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const useFirebase = () => {
const [user] = useAuthState(auth);
// const [user,setUser] = useState({});
console.log(user);

// useEffect(() =>{
//  onAuthStateChanged(auth,user=>{
//    setUser(user);
//  })
  
// },[])

const handleSignout = () => {
   signOut(auth)
   .then(()=>{})
}

// const signInGoogle = ()=>{



    
//     signInWithPopup(auth, provider)
//   .then((result) => {
   
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
   
//     const user1 = result.user;
//     // setUser(user1)
//     // console.log(user1)
    
//   })

   


   
// }

return{
  //  signInGoogle,
   handleSignout



}



}

export default useFirebase;