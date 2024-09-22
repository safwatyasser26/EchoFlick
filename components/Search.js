'use client';
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import { useState } from "react";
const Search = () => {
    
    let [results, setResults] = useState([]); 

    
  return (
    <div className="w-1/2 m-auto relative max-h-50 z-50">
      <SearchBox setResults={setResults}/>
      <SearchResults results={results}/>
    </div>
  )
}

export default Search