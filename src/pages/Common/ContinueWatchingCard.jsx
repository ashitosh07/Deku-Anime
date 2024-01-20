import React, { useState } from 'react';
import data from './continuewatching';
import './ContinueWatchingCard.css';
import { FaPlay } from 'react-icons/fa';

const ContinueWatchingCard = () => {
  const initialVisibleCards = 3;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  const handleShowAll = () => {
    setVisibleCards(data.length);
  };

  return (
    <div>
      <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold">
        Continue Watching
      </h2>
      <div className="continue-watching-container">
        {data.slice(0, visibleCards).map((anime) => (
          <div key={anime.id} className="continue-watching-card">
            <img
              className="background-image"
              src={anime.backgroundImage}
              alt={anime.title}
            />
            <div className="overlay">
              <button className="play-button">
                <FaPlay />
              </button>
              <div className="info">
                <h3 className="title">{anime.title}</h3>
                <p className="season">Season {anime.season}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCards !== data.length && (
        <button className="show-all-button" onClick={handleShowAll}>
          Show All
        </button>
      )}
    </div>
  );
};

export default ContinueWatchingCard;
