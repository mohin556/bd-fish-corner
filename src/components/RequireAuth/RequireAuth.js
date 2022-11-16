import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from './../../hook/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const auth = getAuth(app)
    // const {user} = useFirebase();
    const [user,loading] = useAuthState(auth);
    const location = useLocation();

    
      if(loading){
        return <Loading/>
      }
    if(!user){
        return <Navigate to="/login" state ={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;