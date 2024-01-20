import React, { useState } from 'react';
import './ArticleCard.css';
import articlesData from './articles';

const ArticleCard = () => {
  const initialVisibleArticles = 3;
  const [visibleArticles, setVisibleArticles] = useState(
    initialVisibleArticles,
  );

  const handleShowAll = () => {
    setVisibleArticles(articlesData.length);
  };

  return (
    <div>
      <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold">
        Articles
      </h1>
      {articlesData.slice(0, visibleArticles).map((article) => (
        <div key={article.id} className="article-card">
          <img
            className="article-image"
            src={article.image}
            alt={article.title}
          />
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-date">{article.date}</p>
            <p className="article-description">{article.description}</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      ))}
      {visibleArticles !== articlesData.length && (
        <button className="show-all-button" onClick={handleShowAll}>
          Show All
        </button>
      )}
    </div>
  );
};

export default ArticleCard;
