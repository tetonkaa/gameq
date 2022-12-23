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
import axios from "axios";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  async function getUser(){
    const config = {
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    };
    const userData = await axios.get("http://localhost:8000/user", config)
    console.log(userData.data)
    setUser(userData.data)
  }


  useEffect(() => {
    if (localStorage.token) {
        getUser()
        console.log('getUser has been run')
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
