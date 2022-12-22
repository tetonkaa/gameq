import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import GameCard from './components/GameCard'
import './App.css';
import SignUp from './pages/SignUp'
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Login from './pages/Login'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
        setIsLoggedIn(true)
    }
  }, [localStorage.token])

  return (
    <main>
      <Nav isLoggedIn={isLoggedIn} />
      <h1>gameQ</h1>
      { isLoggedIn ?
      <h1>you're logged in</h1>
      :null }
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login  />}></Route>
      </Routes>
      
    </main>
  );
}

export default App;
