import firebase from "firebase/app";
import "firebase/auth";
export const auth=firebase.initializeApp({

        apiKey: "AIzaSyCrIhLlUzIZxqry7pbVs_wOrsVbKPbPqhk",
        authDomain: "ss-hustler.firebaseapp.com",
        projectId: "ss-hustler",
        storageBucket: "ss-hustler.appspot.com",
        messagingSenderId: "765157163934",
        appId: "1:765157163934:web:982b6537e9e8e86c650c8f"
      
}).auth();