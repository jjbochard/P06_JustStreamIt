function getBestMovieImg() {
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
        .then(response => response.json())
        .then(function (value) {
            document.getElementsByClassName("best-movie-img")[0].innerHTML += `
            <img class="best_img" id="${value.results[0].id}" src="${value.results[0].image_url}"/>
            `
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
