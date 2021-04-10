import React, { useState, useEffect } from 'react';
import axios from './axios';
import './CategoryRow.css'

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getData(){
            let request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        getData()
    },[props.fetchUrl])
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie) => {
                    return(
                    
                    <img className={`poster ${props.isHead && "posterHead"}`} src={`${baseUrl}${props.isHead?movie.poster_path:movie.backdrop_path}`} alt={movie.title} key={movie.id}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Row
