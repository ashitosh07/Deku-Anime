import React from 'react';
import { Link } from 'react-router-dom';
import topAiringData from './topairingdata';
import { FaPlus, FaRegStar } from 'react-icons/fa6';

const AnimeTopAiring = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Top Airing Anime
      </h4>

      <div>
        {topAiringData.map((anime) => (
          <Link
            key={anime.id}
            to="/"
            className="flex gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
          >
            <div className="relative h-22 w-22 rounded-full">
              <img src={anime.image} alt={anime.name} />
              {/* <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span> */}
            </div>

            <div className="flex flex-1 flex-col items-start justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {anime.name}
                </h5>

                <p className="text-sm mt-2">
                  {/* <FaRegStar className="mr-1" /> */}
                  {` ${anime.rating}`}
                </p>
              </div>

              <div className="text-sm flex flex-rows mt-2">
                <p className="pr-2">TV</p>
                <p className="pr-2">{` ${anime.genre}`}</p>
                <p className="pr-2">{` ${anime.duration}`}</p>{' '}
              </div>
            </div>
            <FaPlus className="ml-2 mt-4" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeTopAiring;
