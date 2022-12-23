import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm';



const SearchResults = ({}) => {

    const [searchedGames, setSearchedGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState("")
    


    useEffect(() => {
        // axios put to update favorite game route
      
    }, [selectedGame])
     

    console.log(selectedGame)
    return (
      <div className="games">
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