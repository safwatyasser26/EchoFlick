import { useState, useEffect } from 'react'

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM2MjVjOGEzNWY0Mzk5MTZiZTQzODdlM2RmNDA0NiIsIm5iZiI6MTcyNjMyNzE4NS41NDM1MTksInN1YiI6IjY1MDJmY2Y5MWJmMjY2MDBhYzc1ZTg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oprD_5L4SHXfDMLnvcMJ92eHGM-Ozjgn6xuazI40Ao",
  },
};

const Recommendation = ({movie_id}) => {
  const [recommendedList, setRecommendedList] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('https://web-production-9cf01.up.railway.app/item/get?api_key=2a7D8Xs3g32iluh9&media_type=movie&id=502416');
        
        const data = await response.json();
        setRecommendedList(data.recommended_movie);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [movie_id]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const newItems = [];
      for (let item of recommendedList) {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${Math.floor(item.id)}?language=en-US`, options);
          const data = await response.json();
          newItems.push(data);
          console.log("data");
          console.log(data);
        } catch (error) {
          console.error(`Error fetching details for movie ${item.id}:`, error);
        }
      }
      setItems(newItems);
    };

    if (recommendedList.length > 0) {
      fetchMovieDetails();
    }
  }, [recommendedList]);

  return (
    <>
      {/* Render your items here */}
    </>
  )
}

export default Recommendation