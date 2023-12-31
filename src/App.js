import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=73830b8e';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    "Title":"Superman, Spiderman or Batman",
    "Type":"movie",
    "Year":"2011",
    "imdbID":"tt2084949"
};

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies('Spiderman')
    }, []); 

    return(
        <div className="app">
            <h1>Movie Studio</h1>

            <div className="search">
                <input 
                    placeholder = 'Search For Movies'
                    value = 'Superman'
                    onChange={() => {}}
                />
                <img
                src = {SearchIcon}
                alt = "Search"
                onClick={() => {}}
                />
            </div>

            <div className = "container">
                <div className = "movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img 
                        src = {movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
                        alt = {movie1.Title}
                        />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>

            </div>
        </div> 
    );
};

export default App;