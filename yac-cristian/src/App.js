import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/layouts/Header';
import User from './components/User';
import Routes from './Routes';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPtjYyT6aALjjBDYMFT11X7_zrsDf_PyU",
  authDomain: "chat-firebase-bcab7.firebaseapp.com",
  databaseURL: "https://chat-firebase-bcab7.firebaseio.com",
  projectId: "chat-firebase-bcab7",
  storageBucket: "chat-firebase-bcab7.appspot.com",
  messagingSenderId: "965804372943",
  appId: "1:965804372943:web:6ac8e5274867103957d8ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null); //cuando inicie app no hay usuario registrado

  const onLogout = () => {
    setUser(null)
  }

  useEffect(() => {// sólo cuando carge la app registramos un evento
    firebase.auth().onAuthStateChanged(response => { //cuando se autentica el usuario
      if (response) { //Una vez autenticado
        //Leer los datos del usuario
        firebase.database().ref(`/users/${response.uid}`)
        .once('value')
        .then(snapshot => { //snapshot es una instantanea de los datos
          setUser(snapshot.val()) //Lo ponemos en el state de user
        })
      }
    })
  }, [])

  return (
    <Router>
      <CssBaseline />
      <Header>
        { 
        user && <User user={user} onLogout={onLogout} />
        }
      </Header>
      <Routes/>
    </Router>
  );
}

export default App;
