import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm';



const SearchResults = ({}) => {

    const [searchedGames, setSearchedGames] = useState([]);
    

     

      
    // return early if there are no images
    return (
      <div className="games">
        <SearchForm  searchedGames={searchedGames} setSearchedGames={setSearchedGames} />
       {searchedGames.map((games, i) => (
  <div key={i} className="games">
    <img src={games.background_image} width="250" />
    <p>{games.name}</p>
    <button>Add Game</button>
  </div>
))}

      </div>
    )
  }
  
export default SearchResults;