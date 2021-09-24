function setup_modal() {
    // Get the modal
    let modal = document.getElementById("modal");

    // Get the button that opens the modal
    let btn = document.getElementById("open-modal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function fill_modal() {
    let modal = document.getElementById("modal");

    let images = document.querySelectorAll('.car_img')

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            fetch("http://localhost:8000/api/v1/titles/" + images[i].id)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(function (value) {
                    document
                        .querySelector("#movie-title")
                        .textContent = value.title
                    document
                        .querySelector("#movie-genre")
                        .textContent = value.genres
                })
                .catch(function (err) {
                    // Une erreur est survenue
                })
            modal.style.display = "block";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

setup_modal()
setTimeout(function () {
    fill_modal();
}, 1000)
