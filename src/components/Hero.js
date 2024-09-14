import { React } from 'react';
import './Hero.scss'
import Login from './Login';

function Hero() {

    const defaultPrice = 149;


    return (
        <main>
            <div className="container">
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Starts at <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>{defaultPrice}. Cancel anytime.</h2>
                <section className='login-section'>
                    <Login />
                </section>
            </div>
        </main>
    )
}

export default Hero