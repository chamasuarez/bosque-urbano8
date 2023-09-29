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
  apiKey: "AIzaSyCDZY5XR_-fznDWyW-v6UYVoZ0girMQBOo",
  authDomain: "bosque-urbano-b9a6f.firebaseapp.com",
  projectId: "bosque-urbano-b9a6f",
  storageBucket: "buckets/bosque-urbano-b9a6f.appspot.com",
  messagingSenderId: "841021041966",
  appId: "1:841021041966:web:591057f628e820702c9ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <App />
  </ChakraProvider>
  
  )
