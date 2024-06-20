import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=c67108de&i=${imdbID}`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [imdbID]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-10">
        <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 rounded-md mb-4 md:mb-0" />
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p><strong>Description:</strong> {movie.Plot}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;