'use client';
import React from 'react'
import '@styles/searchBox.css';

const SearchBox = () => {
  return (
    <div className='text-center'>
        <input 
        type='text' 
        placeholder='Type Movie, Tv Show, genre or keyword'
        className='search  bg-[#4444447b] rounded-2xl w-1/2 p-1.5 pl-8 mt-8 m-auto'
        />
    </div>
  )
}

export default SearchBox