function getBestMovieInfo() {
    let image = document.querySelector(".best_img")
    console.log(image)
    let title = document.getElementById("best-movie-title")
    let description = document.querySelector("#best-movie-description")
    fetch("http://localhost:8000/api/v1/titles/" + image.id)
        .then(response => response.json())
        .then(function (value) {
            title.textContent += value.original_title
            description.textContent = value.long_description
        })
        .catch(function (err) {
            // Une erreur est survenue
        })
}

setTimeout(function () {
    getBestMovieInfo()
}, 500)
