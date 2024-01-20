import React, { useEffect, useRef, useState } from 'react';

// import './Discover.css';
import 'react-alice-carousel/lib/alice-carousel.css';

import { requests } from '../core/movie/instance';

// import Movie from './Movie';

// import Footer from './Footer';
import EpisodesRow from './Common/EpisodesRow';
import EpisodesSlider from './Common/EpisodesSlider';
import Footer from './Common/Footer';
import AnimeExplore from './Explore/AnimeExplore';
import TopAiring from './Explore/TopAiring';

const Explore = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const carouselRef = useRef();

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  useEffect(() => {
    const handleSlideChange = () => {
      setMainIndex(carouselRef.current._activeIndex);
    };

    if (carouselRef.current) {
      carouselRef.current.onSlideChanged = handleSlideChange;
    }
  }, [carouselRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <div className='absolute'>
        <div className='carousel' id='media' style={{ marginTop: '10px' }}>
          <AliceCarousel
            ref={carouselRef}
            disableDotsControls
            disableButtonsControls
            items={Slide.map((item, index) => (
              <div key={index} className='item'>
                <div className='carousel-info'>
                  <h2 className='title'>{item.title}</h2>{' '}
                  <p className='season'>{item.season}</p>
                  <p className='details'>
                    <span className='info-icon'>
                      <FaTv />
                    </span>{' '}
                    {item.type},&nbsp;
                    <span className='info-icon'>
                      <FaClock />
                    </span>{' '}
                    {item.duration},&nbsp;
                    <span className='info-icon'>
                      <FaCalendarAlt />
                    </span>{' '}
                    {item.releaseDate}
                  </p>{' '}
                  <p className='desc'>{item.description}</p>{' '}
                  <p className='additional-info'>{item.details}</p>
                  <button
                    className='watch-now-button'
                    onClick={() => alert(`Watch Now: ${item.title}`)}
                  >
                    Watch Now
                  </button>
                </div>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
            buttonsDisabled
            autoPlay={false}
            stopAutoPlayOnHover={false}
          />

          <div className='custom-dots'>
            {Slide.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === mainIndex ? 'active' : ''}`}
                title={Slide[index].title}
              />
            ))}
          </div>

          <div className='btn-prev' onClick={slidePrev}>
            &lang;
          </div>
          <div className='btn-next' onClick={slideNext}>
            &rang;
          </div>
        </div>
      </div> */}

      <AnimeExplore />

      <main className="flex min-h-screen flex-col items-center justify-between space-y-24">
        <div className="px-[1.5rem] mx-auto text-white w-full space-y-24">
          {/* <EpisodesSlider title="Trending Now" url={requests.fetchTrending} />
          <EpisodesSlider title="Newly Added" url={requests.fetchTopRated} /> */}
          <EpisodesRow title="Featured Animes" url={requests.fetchTopRated} />{' '}
          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <TopAiring />
            <TopAiring />
            <TopAiring />
          </div>
          <EpisodesRow
            title="Featured Manga"
            url={requests.fetchActionMovies}
          />{' '}
          <EpisodesRow
            title="Recommended For You"
            url={requests.fetchComedyMovies}
          />
          <EpisodesRow title="Top Upcoming" url={requests.fetchHorrorMovies} />
        </div>{' '}
      </main>
      <Footer />
    </>
  );
};

export default Explore;
