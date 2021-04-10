const apiKey = "d60f57bd804fc7ba4372ddd74a27dd99";

const requests = {
    topRated : `/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    upComing : `/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    popular :  `/movie/popular?api_key=${apiKey}&language=en-US&page=`,
    trending : `/trending/all/day?api_key=${apiKey}`,
    netflixOriginal :  `/discover/tv?api_key=${apiKey}&with_networks=213`,
    actionMovies : `/discover/movie?api_key=${apiKey}&with_genres=28`,
    commedyMovies : `/discover/movie?api_key=${apiKey}&with_genres=35`,
    horrorMovies : `/discover/movie?api_key=${apiKey}&with_genres=27`,
    romanceMovies : `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    documentariesMovies : `/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default requests