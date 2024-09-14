import React from 'react'
import './Poster1.scss'
import MovieCard from './MovieCard';

function Poster1() {


    return (
        <div className='poster1'>
            <div className="container">
                <div className="wrapper">
                    <div className="trend-title">
                        <h1>Trending Now</h1>
                    </div>
                    <div className="trend-selectbox">
                        <div className="selectbox-wrapper">
                            <select className='country-box' name="country" id="country">
                                <option value="india">India</option>
                                <option value="global">Global</option>
                            </select>
                        </div>
                        <div className="selectbox-wrapper">
                            <select className='show-box' name="show" id="show">
                                <option value="india">Movies</option>
                                <option value="global">TV Shows</option>
                            </select></div>

                    </div>
                    <div className="movie-cards">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster1
