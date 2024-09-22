"use client";
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import noImage from '@public/noimage.png';
const SearchResults = ({results}) => {



  return (
    <div className='rounded-sm mt-2 pt-2 w-full   overflow-y-auto absolute backdrop-blur-sm'>
        {results.slice(0,5).map((item) => 
            {
            if (item.poster_path) return (<div className='hover:bg-[#4444447b] p-2 z-40' onClick={(event)=> {console.log('item: ', item)}}><Link href={`/${item.media_type}/${item.id}`}  className='flex items-center'><Image src={item.poster_path ?`https://image.tmdb.org/t/p/original/${item.poster_path}` : noImage} alt={`no image`} width={50} height={50} className='rounded-md mr-2'/>{item.name || item.title} ({item.release_date?.substring(0, 4) || item.first_air_date?.substring(0, 4)})</Link></div>)
})}
    </div>
  )
}

export default SearchResults