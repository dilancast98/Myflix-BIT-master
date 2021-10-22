var movies = [
    {
        rating: 2,
        name: "kigkong",
        image: "https://th.bing.com/th/id/OIP.11fcIOGhqdK3vD5X98iE_QHaK_?pid=ImgDet&rs=1"
    },
    {
        rating: 3,
        name: "anabelle",
        image: "https://www.alohacriticon.com/wp-content/uploads/2019/07/annabellevuelve-a-casa-cartel-sinopsis.jpg"
    }
]

function filterMovies(){
    const search="anabelle"
    const moviesFound=movies.filter(movie=>movie.name===search)
    console.log(moviesFound)
}

function showMovies (){
    let moviesList = document.getElementById("movies-list")
    console.log(moviesList)
    for (i=0; i< movies.length; i++){
        console.log(movies[i])
        const movieItem = '<div id="movies-list-movie-container" class="col">'+
        '<div class="list-movie-img">'+
            '<div class="list-stars-container">'+
                '<i id="gray-star" class="fa-solid fa-star"></i>'+
                '<i id="yellow-star" class="fa-solid fa-star"></i>'+
                '<i id="yellow-star" class="fa-solid fa-star"></i>'+
            '</div> <img class="photo" src="'+movies[i].image+'" alt="oxygen-movie">'+
        '</div></div>'
        moviesList.innerHTML+=movieItem
    
    }
    console.log(moviesList)
}
showMovies()