import axios from "axios";
import React from 'react'

const AxiosInstance = axios.create({
    baseURL: 'https://api.trakt.tv',
    headers: {
        'Content-Type': 'application/json',
        'trakt-api-key': 'bd17d00a38425a74f016116bd9b9d8e988892ca66dde3a117ff6db35d280c38f', // Replace with your Trakt API key
        'trakt-api-version': '2',
    },
});

export default AxiosInstance
