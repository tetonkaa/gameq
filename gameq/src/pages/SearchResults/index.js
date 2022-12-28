import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm';



const SearchResults = ({}) => {

    const [searchedGames, setSearchedGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState("")
    
    async function setGame() {
      const config = {
        headers:{
          'Authorization': localStorage.getItem('token')
        }
      };
      const gameId = { favGameId: selectedGame }
      await axios.put("http://localhost:8000/user", gameId, config)
    }
     

    console.log(selectedGame)
    return (
      <div className="games">
        <button onClick={() => setGame()}>Set Favorite Game</button>
        <SearchForm  searchedGames={searchedGames} setSearchedGames={setSearchedGames} />
          {searchedGames.map((games, i) => (
          <div key={i} className="games">
            <img src={games.background_image} width="250" />
            <p>{games.name}</p>
            <button onClick={() => setSelectedGame(games.slug)}>Add Game</button>
          </div>
          ))}
      </div>
    )
  }
  
export default SearchResults;