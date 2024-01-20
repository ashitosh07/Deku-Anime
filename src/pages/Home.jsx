import React, { useEffect, useRef, useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import './Discover.css';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import Slide from './Slide';
// import { FaTv, FaClock, FaCalendarAlt } from 'react-icons/fa';
// import { RiFolderInfoFill } from 'react-icons/ri';
import { requests } from '../core/movie/instance';
import EpisodesSlider from '../pages/Common/EpisodesSlider';
// import jujustu from '../assets/jujustu.jpg';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import AnimeCarousel from './Common/AnimeCarousel';
import EpisodesRow from '../pages/Common/EpisodesRow';
import ContinueWatchingCard from './Common/ContinueWatchingCard';
import ArticleCard from './Common/ArticleCard';
import Footer from './Common/Footer';
// import Footer from './Footer';

const Home = () => {
  return (
    <>
      <AnimeCarousel />

      <main className="flex min-h-screen flex-col items-center justify-between space-y-24">
        <div className="px-[1.5rem] mx-auto text-white w-full space-y-24">
          <EpisodesSlider title="Trending Now" url={requests.fetchTrending} />
          <EpisodesSlider
            title="Newly Added"
            url={requests.fetchRomanceMovies}
          />
          <ContinueWatchingCard />
          <EpisodesRow title="Latest Episodes" url={requests.fetchTopRated} />
          <ArticleCard />
        </div>{' '}
      </main>
      <Footer />
    </>
  );
};

export default Home;
