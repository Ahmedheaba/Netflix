import React from 'react';
import Row from './Row'
import requests from './request'
import './App.css'
function App(){
        return ( 
            <React.Fragment>
            <Row title='Netflix Home' fetchUrl={requests.fetchNetflixOriginals} />
            <Row title='Trending Movies' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated Movies' fetchUrl={requests.fetchTopRated} />
            <Row title='Romancy Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Document Movies' fetchUrl={requests.fetchDocumentaries} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            </React.Fragment>
         );
}

 
export default App;