import { React, useState } from 'react'
import './Accordion.scss';



function Accordion({question, answer, answer2}) {

    const [isActive, setIsActive] = useState(false);

    
    

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className={`accordion-head ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
                    <h3>{question}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className={`bi bi-plus-lg ${isActive ? 'active' : ''}`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </div>
                <div className={`accordion-details ${isActive ? 'active' : ''}`}>
                    <h3>{answer}</h3>
                    {answer2 && (<h3 className='answer2'>{answer2}</h3>)}
                </div>
            </div>
        </div>
    )
}

export default Accordion
