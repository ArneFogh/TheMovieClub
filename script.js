fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movieData => {
        const h1 = document.createElement("h1");
        let ul=document.createElement("ul");
        h1.innerHTML = "Browse between <span>"+movieData.length+"</span> movies"
        document.body.appendChild(h1)
        const h2 = document.createElement("h2")
        h2.innerHTML = movieData[0].title+" Is the name of the movie that came out in the year "+movieData[0].year+" with a length of "+movieData[0].running_times+" in seconds and a rating of "+movieData[0].rating;
        document.body.appendChild(h2);

        const showMovieData = document.querySelector(".buttons .show-movieData")
        showMovieData.addEventListener("click", function (){
            ul.innerHTML = " ";

        document.body.appendChild(ul);
        for (let i = 0; i < movieData.length; i++) {
            const showMovieData = "<div class='movie-container'><div class='movie-information'><span>"+
                movieData[i].title+"</span>"+"<br>Year of publication: <span>"
                +movieData[i].year+"</span><br>Rating: <span>"+movieData[i].rating
                +"</span><br>Duration in minutes: <span>"+movieData[i].running_times/60+"</span></div></div>";

            let li=document.createElement("li");
            ul.appendChild(li);
            li.innerHTML= showMovieData;
        }
        })

        const getNewerMovieButton = document.querySelector(".buttons .newer-movie")
        getNewerMovieButton.addEventListener("click", function (){
            ul.innerHTML = " ";

            document.body.appendChild(ul);
            for (let i = 0; i < movieData.length ; i++) {
                if (movieData[i].year >= 2014) {
                    const newerMovieInformation = "<div class='new-movie-container'><div class='new-movie-information'><span>"+
                        movieData[i].title+"</span>"+"<br>Year of publication: <span>"
                        +movieData[i].year+"</span><br>Rating: <span>"+movieData[i].rating
                        +"</span><br>Duration in minutes: <span>"+movieData[i].running_times/60+"</span></div></div>";

                    let li = document.createElement("li");
                    ul.appendChild(li);
                    li.innerHTML = newerMovieInformation;
                }
            }
        })
        const getHighRatedMovies = document.querySelector(".buttons .high-ratings")
        getHighRatedMovies.addEventListener("click", function (){
            ul.innerHTML = " ";

            document.body.appendChild(ul);
            for (let i = 0; i < movieData.length ; i++) {
                if (movieData[i].rating >= 9) {
                    const highRatedMovieInformation = "<div class='high-rated-movie-container'><div class='high-rated-movie-information'><span>"+
                        movieData[i].title+"</span>"+"<br>Year of publication: <span>"
                        +movieData[i].year+"</span><br>Rating: <span>"+movieData[i].rating
                        +"</span><br>Duration in minutes: <span>"+movieData[i].running_times/60+"</span></div></div>";

                    let li = document.createElement("li");
                    ul.appendChild(li);
                    li.innerHTML = highRatedMovieInformation;
                }
            }
        })

        const showOldMovies = document.querySelector(".buttons .old-movies")
        showOldMovies.addEventListener("click", function (){
            ul.innerHTML = " ";

            document.body.appendChild(ul);
            for (let i = 0; i < movieData.length ; i++) {
                if (movieData[i].year <= 2000) {
                    const oldMovieInformation = "<div class='old-movie-container'><div class='old-movie-information'><span>"+
                        movieData[i].title+"</span>"+"<br>Year of publication: <span>"
                        +movieData[i].year+"</span><br>Rating: <span>"+movieData[i].rating
                        +"</span><br>Duration in minutes: <span>"+movieData[i].running_times/60+"</span></div></div>";
                    let li = document.createElement("li");
                    ul.appendChild(li);
                    li.innerHTML = oldMovieInformation;
                }
            }
        })
    })
