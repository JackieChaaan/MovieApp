import React from 'react'
import './Poster3.scss'
import Login from './Login'
import Accordion from './Accordion'
import { Freeq_ask_ques } from './Freeqaksquet';

function Poster3() {

    const data = Freeq_ask_ques;

    return (
        <div className='poster5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="freeq_ask_ques">
                            <h1>Frequently Asked Questions</h1>
                            <div className="accordion-section">
                                {data.map(({ questionID, question, answer, answer2 }) => {
                                    return <Accordion question={question} answer={answer} answer2={answer2} key={questionID} />
                                })}

                            </div>
                        </div>
                        <div className="member-ship">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster3
