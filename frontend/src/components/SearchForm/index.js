import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from '../../pages/SearchResults';
import './search.css'





  // Destructure props object
  function SearchForm(props) {
    const [searchString, setSearchString] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        getGames();
      }
    
    const handleChange = (event) => {
        setSearchString(event.target.value)
    }

      async function getGames() {
        const {data} = await axios.get(`https://api.rawg.io/api/games?search=${searchString}&search_precise=true&key=aa63c7887e7a4a0e804fe2a27c004822`)
       props.setSearchedGames(data.results)
       
      }
      
    return (
      <form className="search" onSubmit={handleSubmit}>
        <input className="search"
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button className="glassBtn" type="submit"><img class="glass" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"/></button>
      </form>
    );
  }
  
  
export default SearchForm;