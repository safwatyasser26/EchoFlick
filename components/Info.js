"use client";

import  useFavoritesStore from "@store/FavoriteStore";
import {useEffect} from "react";
import Image from "next/image";
const Info = ({ item }) => {

  const { addFavorite, isFavorite } = useFavoritesStore();

  
  return (
    <div className="w-full flex flex-col justify-between md:flex-row bg-[#111]/50 mt-8 rounded-3xl">
      <div className="relative md:basis-1/5 md:h-auto w-full mx-auto md:mx-0 h-80 md:w-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            item?.poster_path || item?.backdrop_path
          }`}
          alt={item?.title || item?.name}
          objectFit="objectFit"
          layout="fill"
          className="rounded-3xl"
        />
        

        <button className={`mt-4 bg-gray-500/50 text-white py-2 px-4 rounded-3xl absolute bottom-0 right-0 ${!isFavorite(item.id) && "hover:bg-black"}`} onClick={() => addFavorite(item)} disabled={isFavorite(item)}>
          {isFavorite(item.id) ? "Favourited" : "Add To Watchlist"}
        </button>
      </div>

      <div className="basis-3/4 flex flex-col items-center content-between p-8">
        <h1 className="text-4xl font-extrabold mb-2">{item?.title || item?.name}</h1>
        <p className="relative flex items-center text-lg text-gray-300 mb-2">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(item?.release_date || item?.first_air_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <div className="text-center mb-2">
          <div className="w-16 h-16 rounded-full bg-[#f5c518] flex items-center justify-center text-2xl text-black font-bold m-auto">
            {Math.floor(item?.vote_average * 10) / 10}
          </div>
        </div>

        <p className="mt-2 mb-5 flex flex-wrap">
          {item?.genres?.map((genre) => (
            <span className="bg-main_red p-3 m-2 rounded-full">
              {genre.name}
            </span>
          ))}
        </p>
        <p className="text-xl font-semibold text-[#ddd] rounded-3xl p-8 bg-[#111]/60 w-3/4 max-h-[180px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {item?.overview}
        </p>
        
      </div>
    </div>
  );
};

export default Info;
