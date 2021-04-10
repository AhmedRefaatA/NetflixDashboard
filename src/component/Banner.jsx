import React, { useState, useEffect } from 'react';
import axios from './axios';
import './CategoryRow.css';
import requests from './requests';
import './Banner.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getData(){
            let request = await axios.get(requests.netflixOriginal);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;

        }
        getData()
    },[])
        
        console.log(movie)
        const truncate = (string, len) => {
            return string?.length > len ? string.substr(0,len -1 ) + "..." : string;
        }
        return(
            <div className="banner" style={{
                backgroundImage: `url("${baseUrl}${movie.poster_path}")`,
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}>
                <div className="banner-content">
                    <h2>{movie.name}</h2>
                    <div className="button">
                        <button>Play</button>
                        <button>Add My List</button>
                    </div>
                    <p>{truncate(movie.overview, 150)}</p>
                </div>
                <div className="banner-footer"></div>
            </div>
        )
    }
    
export default Banner
