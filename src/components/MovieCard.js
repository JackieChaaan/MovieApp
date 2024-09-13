import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext'
import MoviePoster from './MoviePoster';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './MovieCard.scss';
import Popup from './Popup';

const MovieCard = () => {
    const movies = useContext(MovieContext);
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedIMDB, setSelectedIMDB] = useState(null);

    // console.log(movies);

    const popupHandler = (imdb) => {
        setSelectedIMDB(imdb);
        setOpenPopup(true);
    }

    const closeHandler = () => {
        setOpenPopup(false);
        setSelectedIMDB(null)
    }



    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <section className='movie-card'>
                <div className="cards">
                    <div className="container">

                        <div className="slider-container">
                            <div className="container">
                                <Slider {...settings}>

                                    {movies.map(({ movie }, index) => (
                                        <div className='slider' key={index} onClick={() => { popupHandler(movie.ids.imdb) }}>
                                            <div className="slider-poster">
                                                <MoviePoster imdb={movie.ids.imdb} />
                                            </div>
                                            <div className="slider-index">{index + 1}</div>
                                        </div>
                                    ))}

                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {openPopup && <Popup imdb={selectedIMDB} onClose={closeHandler} />}
        </>
    )
}

export default MovieCard
