import React from 'react'
import './Poster2.scss'
import { reasonsToJoin } from './ReasonsToJoin'


function Poster2() {


    return (
        <div className='poster2'>
            <div className="container">
                <div className="poster2-title">
                    <h2>More reasons to join</h2>
                </div>
                <div className="poster2-content">
                    <div className="row">
                        {
                            reasonsToJoin.map(({ id, content, icon, title }) => (
                                <div className="col-md-12 col-lg-6 col-xl-3" key={id}>
                                    <div className="main-wrapper">
                                        <div className="content-wrapper">
                                            <div className="content-title">
                                                <h4>{title}</h4>
                                            </div>
                                            <div className="content-details">
                                                <p>{content}</p>
                                            </div>
                                            <div className="icon">
                                                {icon}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster2
