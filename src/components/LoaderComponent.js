import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import './LoaderComponent.scss'

function LoaderComponent() {
    return (
        <div className="loader">
            
            <CirclesWithBar
                height="50"
                width="50"
                color="#ff102a"
                outerCircleColor="#ff102a"
                innerCircleColor="#ff102a"
                barColor="#ff102a"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>

    )
}

export default LoaderComponent
