import React from 'react';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
import "firebase/app";
import {auth} from '../firebase';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
 const Login=()=>{
     return(
     
     <div id="login-page">
         <div id="login-card">
             <h1>Welcome to Unite Squad!!</h1>
         
         <div className='login-button google tube special' onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
           <a>  <span><GoogleOutlined/>Sign in with Google</span></a>
         </div> 
        
         

     </div>
     </div>
     )
 }
 export default Login;