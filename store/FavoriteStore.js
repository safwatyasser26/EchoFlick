import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (item) =>
        set((state) => {
          const existing = state.favorites.find((i) => i.id === item.id);
          if (!existing) {
            console.log("adding item to favorites", item);
            return { favorites: [...state.favorites, item] };
          }
          return state;
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== id),
        })),

      isFavorite: (id) =>
        get().favorites.some((movie) => movie.id === id),

      clearFavorites: () => set({ favorites: [] }),
    }),
    { name: "favorites" }
  )
);

export default useFavoritesStore;
