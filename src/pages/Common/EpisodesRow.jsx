// ... Other imports

import { instense } from '../../core/movie/instance';

import React, { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import { Link } from 'react-router-dom';

const EpisodesRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await instense.get(url);
      setMovies(res.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error?.message);
    }
  };

  useEffect(() => {
    if (!movies.length) {
      fetchMovies();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-8">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold">
          {title}
        </h1>
        <Link href={'/'} className="flex items-center space-x-3">
          <span className="text-sm">View All</span>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.294998 10.59L4.875 6L0.294998 1.41L1.705 0L7.705 6L1.705 12L0.294998 10.59Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:grid-cols-10 grid-rows-2 w-full gap-x-5 gap-y-10">
        {movies.slice(0, 10).map((item, index) => (
          <React.Fragment key={index}>
            <AnimeCard movie={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EpisodesRow;
