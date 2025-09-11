"use client";
import { useState, useEffect } from "react";
import Select from 'react-select';
import Carousel2 from "@components/Carousel2";
import Image from "next/image";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM2MjVjOGEzNWY0Mzk5MTZiZTQzODdlM2RmNDA0NiIsIm5iZiI6MTcyNjMyNzE4NS41NDM1MTksInN1YiI6IjY1MDJmY2Y5MWJmMjY2MDBhYzc1ZTg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oprD_5L4SHXfDMLnvcMJ92eHGM-Ozjgn6xuazI40Ao",
  },
};

const baseUrl = "https://api.themoviedb.org/3/discover/tv?";
const defaultParams =
  "include_adult=true&include_null_first_air_dates=false&vote_count.gte=500";

const TvPage = () => {
  const [genre, setGenre] = useState([]);
  const [withoutGenre, setWithoutGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [date, setDate] = useState({ from: '', to: '' });
  const [priority, setPriority] = useState("");
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedWithoutGenre, setSelectedWithoutGenre] = useState(null);

  const priorityOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'rating', label: 'Rating' },
    { value: 'date', label: 'First Air Date' }
  ];

  const handlePriorityChange = (selectedOption) => {
    setSelectedPriority(selectedOption);
    setPriority(selectedOption ? selectedOption.value : '');
  };
  
  const handleDateFromChange = (selectedOption) => {
    setSelectedDateFrom(selectedOption);
    setDate(prevDate => ({ ...prevDate, from: selectedOption ? `${selectedOption.value}-01-01` : '' }));
  };
  
  const handleWithoutGenreChange = (selectedOptions) => {
    setSelectedWithoutGenre(selectedOptions);
    setWithoutGenre(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handleDateToChange = (selectedOption) => {
    setSelectedDateTo(selectedOption);
    setDate(prevDate => ({ ...prevDate, to: selectedOption ? `${selectedOption.value}-12-31` : '' }));
  };

  const handleGenreChange = (selectedOptions) => {
    setSelectedGenre(selectedOptions);
    setGenre(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };
  

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      color: 'white',
      '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(100,100,100, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '::-webkit-scrollbar': {
      width: '0px',
      height: '0px',
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      color: 'white',
      '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '4px',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: 'white',
      },
    }),
    input: (provided) => ({
      ...provided,
      color: 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };
  
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1900; year--) {
      years.push({ value: year.toString(), label: year.toString() });
    }
    return years;
  };

  const constructUrl = () => {
    const params = new URLSearchParams(defaultParams);
    params.append("page", page);

    if (genre.length > 0) {
      params.append("with_genres", genre.join(","));
    }

    if (withoutGenre.length > 0) {
      params.append("without_genres", withoutGenre.join(`,`));
    }

    if (date.from) {
      params.append("first_air_date.gte", date.from);
    }

    if (date.to) {
      params.append("first_air_date.lte", date.to);
    }

    switch (priority) {
      case "popularity":
        params.append("sort_by", "popularity.desc");
        break;
      case "rating":
        params.append("sort_by", "vote_average.desc");
        break;
      case "date":
        params.append("sort_by", "first_air_date.desc");
        break;
      default:
        params.append("sort_by", "popularity.desc");
        break;
    }

    return `${baseUrl}${params.toString()}`;
  };

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/tv/list?language=en",
        options
      );
      const data = await response.json();
      const formattedGenres = data.genres.map(genre => ({
        value: genre.id.toString(),
        label: genre.name
      }));
      setGenreOptions(formattedGenres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
  
  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const url = constructUrl();
        const res = await fetch(url, options);
        const json = await res.json();
        setResults(json.results);
        setTotalPages(json.total_pages);
        setIsLoading(false);
        console.log(json);
      } catch (err) {
        console.error("Error: ", err);
      }
    };

    fetchTvShows();
    console.log(constructUrl());
  }, [genre, withoutGenre, page, date, priority]);

  return (
    <div className="mt-8">
      <h1 className="text-5xl font-bold pb-4">
        <span className="text-main_red">Discover</span> TV Shows
      </h1>

      <div className="filtering flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 m-8 justify-center scrollbar-hide min-w-fit">
        <Select
          value={selectedGenre}
          onChange={handleGenreChange}
          options={genreOptions}
          className="md:w-1/5 text-white bg-[#111]/20 border border-gray-600 rounded-md"
          classNamePrefix="react-select"
          placeholder="Select genres"
          isMulti={true}
          styles={selectStyles}
        />
        <Select
  value={selectedWithoutGenre}
  onChange={handleWithoutGenreChange}
  options={genreOptions}
  className="md:w-1/5 text-white bg-[#111]/20 border border-gray-600 rounded-md"
  classNamePrefix="react-select"
  placeholder="Without genre"
  isMulti={true}
  styles={selectStyles}
/>
        
        <Select
          value={selectedPriority}
          onChange={handlePriorityChange}
          options={priorityOptions}
          className="md:w-1/5 text-white bg-[#111]/20 border border-gray-600 rounded-md"
          classNamePrefix="react-select"
          placeholder="Select priority"
          styles={selectStyles}
        />
        
        <Select
          value={selectedDateFrom}
          onChange={handleDateFromChange}
          options={generateYearOptions()}
          className="md:w-1/5 text-white bg-[#111]/20 border border-gray-600 rounded-md"
          classNamePrefix="react-select"
          placeholder="From Year"
          styles={selectStyles}
        />
        
        <Select
          value={selectedDateTo}
          onChange={handleDateToChange}
          options={generateYearOptions()}
          className="md:w-1/5 text-white bg-[#111]/20 border border-gray-600 rounded-md"
          classNamePrefix="react-select"
          placeholder="To Year"
          styles={selectStyles}
        />
      </div>

      {!isLoading && (
        <div className="skeleton grid grid-cols-2 md:grid-cols-4 grid-rows-5 gap-6 mt-4">
          {results.map((show) => (
            <Link href={`/tv/${show.id}`} className="w-full" key={show.id}>
              <div
                key={show.id}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 relative"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                  width={400}
                  height={500}
                  alt={show.name}
                  className="relative"
                />
                <h2 className="text-sm md:text-xl font-semibold p-2 text-center backdrop-blur-md absolute bottom-0 w-full">
                  {show.name}
                </h2>
                <span className="absolute top-0 right-0 font-bold text-xl p-1 backdrop-blur-md">
                  {show.first_air_date.substring(0, 4)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Previous
        </button>
        <span className="text-xl font-semibold">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
          onClick={() => {
            if (page < totalPages) {
              setPage(page + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TvPage;