import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb_drDeFyXU_MJ0UAeKz9z-uV5PB-D0xU",
  authDomain: "new-bosque.firebaseapp.com",
  projectId: "new-bosque",
  storageBucket: "new-bosque.appspot.com",
  messagingSenderId: "464420028707",
  appId: "1:464420028707:web:9577ea650f7002e7290c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <App />
  </ChakraProvider>
  
  )
