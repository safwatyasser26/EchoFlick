"use client";

import { useEffect, useState } from "react";
import Carousel2 from "@components/Carousel2";
import SearchBox from "@components/SearchBox";
import Search from "@components/Search";
import "./globals.css";
import SearchResults from "@components/SearchResults";
const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const tv_url =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM2MjVjOGEzNWY0Mzk5MTZiZTQzODdlM2RmNDA0NiIsIm5iZiI6MTcyNjMyNzE4NS41NDM1MTksInN1YiI6IjY1MDJmY2Y5MWJmMjY2MDBhYzc1ZTg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oprD_5L4SHXfDMLnvcMJ92eHGM-Ozjgn6xuazI40Ao",
  },
};

export default function Home() {
  let [data, setData] = useState([]);
  let [tvData, setTvData] = useState([]);
  // const [results, setResults] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(url);
  }, []);
  useEffect(() => {
    fetchTvData(tv_url);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData([...result.results]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTvData = async () => {
    try {
      const response = await fetch(tv_url, options);
      const result = await response.json();
      setTvData([...result.results]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //console.table(results);

  return (
    <main>
      <div className="gentleman"></div>
      {/* <div className="w-1/2 m-auto relative max-h-50">
      <SearchBox setResults={setResults}/>
      <SearchResults results={results}/>
      </div> */}

      <div className=" max-sm:text-center">
        <p className="sm:text-5xl text-3xl font-bold mt-10">
          Find What You’ve Been <br />{" "}
          <span className="text-main_red">Searching</span> For
        </p>
        <p className="w-72 my-10 opacity-70 max-sm:mx-auto">
          The best Recommendation system to find all the movies that are similar
          to what you like
        </p>
        <button className="bg-main_red py-4 px-8 font-semibold mb-10">
          Sign Up Today
        </button>
      </div>
      <h1 className="text-3xl font-bold mt-10">Top Movies</h1>
      {isLoading ? <p>Loading...</p> : <Carousel2 data={data} type="movie" />}

      <h1 className="text-3xl font-bold mt-10">Top Tv Shows</h1>
      {isLoading ? <p>Loading...</p> : <Carousel2 data={tvData} type="tv" />}
    </main>
  );
}
