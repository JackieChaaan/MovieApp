import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import './LoaderComponent.scss'

function LoaderComponent() {
    return (
        <div className="loader">
            <CirclesWithBar
                height="50"
                width="50"
                color="#0f163b"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>

    )
}

export default LoaderComponent
