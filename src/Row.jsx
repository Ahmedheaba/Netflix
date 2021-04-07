import React, {useState,useEffect} from 'react';
import axios from './axios'
import './row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original';
function Row({title,fetchUrl}){
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.log(movies);
    return(
        <div className="row">
            <h2 className='title'>{title}</h2>
            <div className="row_Posters">
                {movies.map((movie) =>(
                    <img
                    className="row_Poster"
                    src={`${baseUrl}${movie.poster_path}`} 
                    alt={movie.name}
                    key={movie.id} 
                    />
                ))}
            </div>
        </div>
    )
}
export default Row;