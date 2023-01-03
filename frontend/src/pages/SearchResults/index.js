import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import SearchForm from '../../components/SearchForm';
import './main.css'


function borderChange() {
  document.getElementById("gameSelector").style.borderColor = "red";
  
  }

const SearchResults = ({}) => {

    const [searchedGames, setSearchedGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState("");
    const [toProfile, setToProfile] = useState('false')

    if (toProfile === true) {
      return <Navigate to="/profile"></Navigate>
    }
    
    async function setGame(games) {
      setSelectedGame(games)
      
      const config = {
        headers:{
          'Authorization': localStorage.getItem('token')
        }
      };
      const gameId = { favGameId: selectedGame }
      await axios.put("user", gameId, config)
      setToProfile(true);
    }
     

    
    return (
      <>
      <div>
        <p className="searchTitle">Choose your favorite game from a Catalogue of over 500,000 titles!</p>
      </div>
      <div className="ResultContainers">
      
      <button className="someRedBtn setBtn" onClick={() => setGame()}>Set Favorite Game</button>
        
      
      <div className="searchResult ">
        <SearchForm  searchedGames={searchedGames} setSearchedGames={setSearchedGames} />
          {searchedGames.map((games, i) => (
            <div className="foundGames" key={i} >
            <button className="gameBtn" id="gameSelector" onClick={() => {setSelectedGame(games.slug); borderChange();}}>Select this title</button>
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