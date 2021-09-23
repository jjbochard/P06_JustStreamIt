function getBestMovieImg() {
    fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })

        .then(function (value) {
            document
                .querySelector(".best-movie-img")

                .src = value.results[0].image_url;
        })

        .catch(function (err) {
            // Une erreur est survenue
        })
}

function getCarouselImgPage1(genre) {
    if (genre == "") {
        fetch("http://localhost:8000/api/v1/titles/?" + genre + "&sort_by=-imdb_score&page=1")
            .then(response => response.json())

            .then(function (response) {
                response.results.forEach(function (value, index) {
                    document.getElementById('best-movie-img-' + index).innerHTML += `
                    <img class="car_img" id="${response.results[index].id}" src="${value.image_url}"/>
                `
                    index++
                })
            })

            .catch(function (err) {
                // Une erreur est survenue
            })
    } else {
        fetch("http://localhost:8000/api/v1/titles/?genre=" + genre + "&sort_by=-imdb_score&page=1")
            .then(response => response.json())

            .then(function (response) {
                response.results.forEach(function (value, index) {
                    document.getElementById(genre.toLowerCase() + '-movie-img-' + index).innerHTML += `
                    <img class="car_img" id="${response.results[index].id}" src="${value.image_url}"/>
                `
                    index++
                })
            })

            .catch(function (err) {
                // Une erreur est survenue
            })
    }
}

function getCarouselImgPage2(genre) {
    if (genre == "") {
        fetch("http://localhost:8000/api/v1/titles/?genre=" + genre + "&sort_by=-imdb_score&page=2")
            .then(response => response.json())

            .then(function (response) {
                response.results.forEach(function (value, index) {
                    if (index < 2) {
                        document.getElementById('best-movie-img-' + (index + 5)).innerHTML += `
                            <img class="car_img" id="${response.results[index].id}" src="${value.image_url}"/>
                            `
                        index++
                    }
                })
            })

            .catch(function (err) {
                // Une erreur est survenue
            })
    } else {
        fetch("http://localhost:8000/api/v1/titles/?genre=" + genre + "&sort_by=-imdb_score&page=2")
            .then(response => response.json())

            .then(function (response) {
                response.results.forEach(function (value, index) {
                    if (index < 2) {
                        document.getElementById(genre.toLowerCase() + '-movie-img-' + (index + 5)).innerHTML += `
                    <img class="car_img" id="${response.results[index].id}" src="${value.image_url}"/>
                `
                        index++
                    }
                })
            })

            .catch(function (err) {
                // Une erreur est survenue
            })
    }
}

document
    .addEventListener("DOMContentLoaded", getBestMovieImg);
document
    .addEventListener("DOMContentLoaded", getCarouselImgPage1(""))
document
    .addEventListener("DOMContentLoaded", getCarouselImgPage2(""))
document
    .addEventListener("DOMContentLoaded", getCarouselImgPage1("horror"))
document
    .addEventListener("DOMContentLoaded", getCarouselImgPage2("horror"))
document
    .addEventListener("DOMContentLoaded", getCarouselImgPage1("music"))
document
    .addEventListener("DOMContentLoaded", getCarouselImgPage2("music"))
