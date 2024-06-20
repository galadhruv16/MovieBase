// import React from "react";
// import Header from "./Header";
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const searchRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const query = searchRef.current.value;
    if (query.trim() === "") return;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=c67108de&s=${query}`);
      setSearchResult(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleMovieClick = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-black flex flex-col items-center py-10 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl text-white font-bold mb-8">Movie Search</h1>
      <div className="flex mb-8 w-full max-w-xl">
        <input 
          type="text" 
          ref={searchRef} 
          placeholder="Search for movies..." 
          className="p-2 flex-grow rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button 
          onClick={handleSearch} 
          className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {searchResult.length > 0 ? (
          searchResult.map(movie => (
            <div 
              key={movie.imdbID} 
              onClick={() => handleMovieClick(movie.imdbID)} 
              className="cursor-pointer p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
            >
              <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-md mb-2" />
              <div className="text-center">
                <div className="font-bold">{movie.Title}</div>
                <div className="text-sm text-gray-400">{movie.Year}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No movies found</p>
        )}
      </div>
    </div>
  );
};



export default Home;
