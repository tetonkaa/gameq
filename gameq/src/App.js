import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import GameCard from './components/GameCard'
import './App.css';
import SignUp from './pages/SignUp'
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Login from './pages/Login'
import SearchForm from "./components/SearchForm";
import SearchResults from "./pages/SearchResults";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    if (localStorage.token) {
        setIsLoggedIn(true)
    }
  }, [localStorage.token])



  return (
    <main>

    <div>
    
    
    </div>
      <Nav isLoggedIn={isLoggedIn} />
      <h1>gameQ</h1>
      { isLoggedIn ?
      <h1>you're logged in</h1>
      :null }
      <button onClick={() => localStorage.clear()}>Log out</button>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/signup" element={<SignUp  />}></Route>
        <Route path="/login" element={<Login  />}></Route>
        <Route path= "/search"   element={<SearchResults />}></Route>
      </Routes>
      
    </main>
  );
}

export default App;
