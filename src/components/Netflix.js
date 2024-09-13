import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import './Netflix.scss';
import Poster1 from './Poster1';
import Poster2 from './Poster2';
import Poster3 from './Poster3';
import Footer from './Footer';
import { TrendingMovieList } from './MovieContext';

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TrendingMovieList>
      <div className="netflix">
        <div className='basiclayout'>
          <div className="hero">
            <div className="hero-wrapper">
              <div className="container">
                <Header />
                <div className="main">
                  <Hero />
                </div>
              </div>
            </div>
            <div className="wave-container">
              <div className="wave"></div>
            </div>
          </div>
          <div className="posters-wrap">
            <Poster1 />
            <Poster2 />
            <Poster3 />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
        <div className={`get-started-btn ${isScrolled ? 'show-btn' : ''}`}>
          <div className="container">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </TrendingMovieList>
  );
}

export default Netflix;
