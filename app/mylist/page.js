"use client";
import React from "react";
import useFavoritesStore from "@store/FavoriteStore";

import { XMarkIcon } from "@heroicons/react/24/solid";

const MyList = () => {
  const { favorites, clearFavorites, removeFavorite } = useFavoritesStore();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My List</h1>
      {favorites && favorites.length > 0 ? (
        <>
          <button
            className="mb-6 px-4 py-2 bg-main_red text-white rounded hover:bg-red-800"
            onClick={clearFavorites}
          >
            Clear List
          </button>
          <ul className="space-y-4">
            {favorites.map((item) => (
              <li
                key={item.id}
                className="p-4 background-black rounded-xl flex items-center space-x-4"
              >
                {item.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-16 h-24 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    {item.title || item.name}
                  </h2>
                  <p className="text-gray-400">
                    {item.release_date || item.first_air_date}
                  </p>
                </div>
                <button
                  className="ml-4 px-3 py-1 bg-main_red text-white rounded hover:bg-red-800"
                  onClick={() => removeFavorite(item.id)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-400">No items in your list yet.</p>
      )}
    </div>
  );
};

export default MyList;
