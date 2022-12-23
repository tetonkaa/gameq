import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from '../../pages/SearchResults';





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
       console.log('trying to search')
      }
      
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  
  
export default SearchForm;