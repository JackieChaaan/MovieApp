import {React, useState} from 'react'
import './Login.scss'

function Login() {

    const [email, setEmail] = useState('');
    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);

    const handleBlur = () => {
        if (!email) {
            setAlert1(true);
            setAlert2(false);
        } else if (!validateEmail(email)) {
            setAlert1(false);
            setAlert2(true);
        } else {
            setAlert1(false);
            setAlert2(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setAlert1(true)
            setAlert2(false)
        }
        else if (!validateEmail) {
            setAlert1(false)
            setAlert2(true)
        }
        else {
            setAlert1(false)
            setAlert2(false)
        }
    };

    const validateEmail = () => {
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return reg.test(String(email).toLocaleLowerCase())
    };

    return (
        <div className='login'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-box">
                    <div className='email-input'>
                        <input type="email" name='email' id='email' autoComplete='off' placeholder=" " required onBlur={handleBlur} onChange={(e) => { setEmail(e.target.value) }} className={`${alert1 || alert2 ? 'alert-border' : ''}`} />
                        <label htmlFor="email">Email address</label>
                        {alert1 && (<span className='required-email'>
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                            Email is required.
                        </span>)}
                        {alert2 && (<span className='valid-email'>
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                            Please enter a valid email address.
                        </span>)}


                    </div>
                    <button type="submit">Get Started &nbsp; &gt; </button>
                </div>
            </form>
        </div>
    )
}

export default Login
