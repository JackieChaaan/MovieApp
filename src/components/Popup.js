import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Popup.scss'
import Genre from './Genre';
import LoaderComponent from './LoaderComponent';



const Popup = ({ imdb, onClose }) => {

    const [popupMovieDtls, setPopupMovieDtls] = useState(null);
    const API_KEY = "530c7911";

    const getFullDetails = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?i=${imdb}&apikey=${API_KEY}`);
            setPopupMovieDtls(response.data);
            ;


        } catch (e) {
            console.error('Error, Not find', e);
        }
    }

    useEffect(() => {
        if (imdb) getFullDetails();
    }, [imdb])


    return (
        <>

            <section className='movie-popup'>
                {popupMovieDtls ? (
                    <div className="pop-up">
                        <div className="container">
                            <div className="pop-up-wrapper">
                                <button className='closeBtn' onClick={onClose}><i className="bi bi-x-lg" ></i></button>
                                <div className="movie-poster">
                                    <img src={popupMovieDtls.Poster} alt="movie-poster" className='movie-poster' />
                                </div>
                                <div className="movie-title">
                                    <h1>{popupMovieDtls.Title}</h1>
                                </div>
                                <div className="more-dtls">
                                    <div className="year more">
                                        {popupMovieDtls.Year}
                                    </div>
                                    <div className="rated more">
                                        {popupMovieDtls.Rated}
                                    </div>
                                    <div className="type more">
                                        {popupMovieDtls.Type}
                                    </div>
                                    <div className="genre">
                                        <Genre genre = {popupMovieDtls.Genre}/>
                                    </div>
                                </div>
                                <div className="about-movie">
                                    <p>{popupMovieDtls.Plot}</p>
                                </div>
                                <div className="get-start-btn">
                                    <button>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    (<LoaderComponent/>)
                }
            </section>

        </>
    )
}

export default Popup
