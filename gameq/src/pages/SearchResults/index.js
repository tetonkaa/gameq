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
    
    async function setGame(games) {
      setSelectedGame(games)
      console.log(selectedGame)
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
      <>
      <div>
        <p>Choose your favorite game from a Catalogue of over 500,000 titles!</p>
      </div>
      <div className="ResultContainers">
      <div className="setBtn">
      <button  onClick={() => setGame()}>Set Favorite Game</button>
      </div>   
      
      <div className="searchResult">
        <SearchForm  searchedGames={searchedGames} setSearchedGames={setSearchedGames} />
          {searchedGames.map((games, i) => (
            <div className="foundGames" key={i} >
            <button className="gameBtn" onClick={() => setSelectedGame(games.slug)}>Select this title</button>
            <img className="gameImage" src={games.background_image} width="250" />
            <p>{games.name}</p>
          </div>
          ))}
      </div>
     </div>
     </> 
    )
  }
  
export default SearchResults;