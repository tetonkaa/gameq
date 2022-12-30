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
import Profile from './pages/Profile'


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
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
      <h1>gameQ</h1>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/signup" element={<SignUp  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path='/profile' element={<Profile setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} user={user} />}></Route>
        <Route path= "/search"   element={<SearchResults />}></Route>
      </Routes>
      
    </main>
  );
}

export default App;
