import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import './Dashbord.css';
import ReactDOM from "react-dom";
import Navbar from'./Navbar';




class App extends React.Component {
    
    render() { 
        return ( 
            <div className="dashBord">
                <Navbar />
                <Banner />
                <Row title="NetflixOriginal" fetchUrl={requests.netflixOriginal} isHead={true} />
                <Row title="Trending" fetchUrl={requests.trending}/>
                <Row title="TopRated" fetchUrl={requests.topRated} />
                <Row title="Popular" fetchUrl={requests.popular} />
                <Row title="UpComing" fetchUrl={requests.upComing} />
                <Row title="ActionMovies" fetchUrl={requests.actionMovies} />
                <Row title="CommedyMovies" fetchUrl={requests.commedyMovies} />
                <Row title="HorrorMovies" fetchUrl={requests.horrorMovies} />
                <Row title="RomanceMovies" fetchUrl={requests.romanceMovies} />
                <Row title="DocumentariesMovies" fetchUrl={requests.documentariesMovies} />
            </div>
         );
    }
}
 
export default App;