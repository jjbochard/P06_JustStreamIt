function setup_modal() {
    // Get the modal
    let modal = document.getElementById("modal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}
function fill_modal_best_movie() {
    let modal = document.getElementById("modal")
    let btn = document.getElementById("open-modal")
    let image = document.querySelector(".best_img")

    let modal_image = document.querySelector(".img_container")
    let title = document.querySelector("#movie-title")
    let genre = document.querySelector("#movie-genre")
    let publishedDate = document.querySelector("#movie-date-published")
    let rated = document.querySelector("#movie-rated")
    let imdb_score = document.querySelector("#movie-imdb-score")
    let directors = document.querySelector("#movie-directors")
    let actors = document.querySelector("#movie-actors")
    let duration = document.querySelector("#movie-duration")
    let countries = document.querySelector("#movie-countries")
    let boxOffice = document.querySelector("#movie-box-office")
    let description = document.querySelector("#movie-description")

    btn.onclick = function () {
        fetch("http://localhost:8000/api/v1/titles/" + image.id)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function (value) {
                modal_image.innerHTML += `<img class="modal_img" "src="${value.image_url}/>"`
                title.textContent = value.original_title
                genre.textContent = value.genres.join(" - ")
                publishedDate.textContent = date(value.date_published)
                rated.textContent = value.rated
                imdb_score.textContent = value.imdb_score + " / 10"
                directors.textContent = "Directed by : " + value.directors.join(", ")
                actors.textContent = "With " + value.actors.join(", ")
                duration.textContent = value.duration + " min"
                countries.textContent = value.countries.join(" - ")
                boxOffice.textContent = value.worldwide_gross_income
                description.textContent = value.long_description
            })
            .catch(function (err) {
                // Une erreur est survenue
            })
        modal.style.display = "block";
    }
}


function fill_modal_carousel() {
    let modal = document.getElementById("modal")
    let images = document.querySelectorAll(".car_img")

    let modal_image = document.querySelector(".img_container")
    let title = document.querySelector("#movie-title")
    let genre = document.querySelector("#movie-genre")
    let publishedDate = document.querySelector("#movie-date-published")
    let rated = document.querySelector("#movie-rated")
    let imdb_score = document.querySelector("#movie-imdb-score")
    let directors = document.querySelector("#movie-directors")
    let actors = document.querySelector("#movie-actors")
    let duration = document.querySelector("#movie-duration")
    let countries = document.querySelector("#movie-countries")
    let boxOffice = document.querySelector("#movie-box-office")
    let description = document.querySelector("#movie-description")

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            fetch("http://localhost:8000/api/v1/titles/" + images[i].id)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(function (value) {
                    modal_image.innerHTML += `<img class="modal_img" "src="${value.image_url}/>"`
                    title.textContent = value.original_title
                    genre.textContent = value.genres.join(" - ")
                    publishedDate.textContent = date(value.date_published)
                    rated.textContent = value.rated
                    imdb_score.textContent = value.imdb_score + " / 10"
                    directors.textContent = "Directed by : " + value.directors.join(", ")
                    actors.textContent = "With " + value.actors.join(", ")
                    duration.textContent = value.duration + " min"
                    countries.textContent = value.countries.join(" - ")
                    boxOffice.textContent = value.worldwide_gross_income
                    description.textContent = value.long_description
                })
                .catch(function (err) {
                    // Une erreur est survenue
                })
            modal.style.display = "block";
        }
    }
}

function date(rawDate) {
    splitDate = rawDate.split("-")
    console.log()
    return splitDate[2] + "/" + splitDate[1] + "/" + splitDate[0]

}
setup_modal()
setTimeout(function () {
    fill_modal_carousel()
    fill_modal_best_movie();
}, 1000)
