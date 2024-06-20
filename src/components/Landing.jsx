import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative bg-black p-6 sm:p-10 rounded-lg font-semibold text-center mx-4 sm:mx-8 md:mx-auto max-w-3xl z-10">
        <h1 className="text-white text-3xl sm:text-4xl mb-4">
          Welcome to MovieBase
        </h1>
        <p className="text-white text-sm sm:text-base mb-6">
          This website is made by Dhruv Gala using ReactJS and TailwindCSS with the help of Vite React project.
        </p>
        <p className="text-white text-sm sm:text-base mb-8">
          You can search for movies on this website and it will show you search results fetching data from a movie database API.
        </p>
        <Link to='/Home'>
          <button className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg">
            Enter The Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;