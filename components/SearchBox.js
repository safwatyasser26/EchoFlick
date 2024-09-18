"use client";
import React from 'react'
import '@styles/searchBox.css';

import {useState, useEffect, useRef} from 'react';



    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM2MjVjOGEzNWY0Mzk5MTZiZTQzODdlM2RmNDA0NiIsIm5iZiI6MTcyNjMyNzE4NS41NDM1MTksInN1YiI6IjY1MDJmY2Y5MWJmMjY2MDBhYzc1ZTg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oprD_5L4SHXfDMLnvcMJ92eHGM-Ozjgn6xuazI40Ao'
  }
};

const SearchBox = ({setResults}) => {
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options)
  .then(res => res.json())
  .then(json => {
    setResults([]);
    setResults(json.results);
    console.log("sent");
  })
  .catch(err => console.error('error:' + err));
  }, [query]);

  const searching = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className='text-center relative'>
        <input 
        type='text' 
        placeholder='Type Movie, Tv Show, genre or keyword'
        className='search  bg-[#4444447b] rounded-2xl w-full p-1.5 pl-8 mt-8 m-auto'
        onChange={searching}
        onBlur={() => setQuery('')}
        onFocus={searching}
        />
        
    </div>
  )
}

export default SearchBox