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
  apiKey: "AIzaSyDxWwcX5pXoZB0toXsFl5SHWj-WpiKXniM",
  authDomain: "bosque-urbano-5c8d5.firebaseapp.com",
  projectId: "bosque-urbano-5c8d5",
  storageBucket: "bosque-urbano-5c8d5.appspot.com",
  messagingSenderId: "787570845002",
  appId: "1:787570845002:web:43c6a6091f12d0c3944db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <App />
  </ChakraProvider>
  
  )
