import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import SearchForm from '../../components/SearchForm';
import './main.css'




const SearchResults = ({}) => {

    const [searchedGames, setSearchedGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState("");
    const [toProfile, setToProfile] = useState('false')

    if (toProfile === true) {
      return <Navigate to="/profile"></Navigate>
    }
    
    async function setGame() {
      const config = {
        headers:{
          'Authorization': localStorage.getItem('token')
        }
      };
      const gameId = { favGameId: selectedGame }
      await axios.put("http://localhost:8000/user", gameId, config)
      setToProfile(true);
    }
     

    console.log(selectedGame)
    return (
      <div className="games search">
        <button onClick={() => setGame()}>Set Favorite Game</button>
        <SearchForm searchedGames={searchedGames} setSearchedGames={setSearchedGames} />
          {searchedGames.map((games, i) => (
          <div key={i} className="games card">
            <img className="card-img-top" src={games.background_image} width="250" />
            <p className="card-text">{games.name}</p>
            <button onClick={() => setSelectedGame(games.slug)}>Add Game</button>
          </div>
          ))}
      </div>
    )
  }
  
export default SearchResults;