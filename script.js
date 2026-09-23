let users = [];
let favouriteGenres = [];
let favouriteMovies = [];
let editMode = false;
let editingUserIndex = null;
const movieForm = document.getElementById("movieForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const genreInput = document.getElementById("genreInput");
const movieInput = document.getElementById("movieInput");
const addGenreButton = document.getElementById("addGenre");
const addMovieButton = document.getElementById("addMovie");
const genreList = document.getElementById("genreList");
const movieList = document.getElementById("movieList");
const genreCount = document.getElementById("genreCount");
const movieCount = document.getElementById("movieCount");
const submitButton = document.getElementById("submitButton");
addGenreButton.addEventListener("click", function () {
    const genre = genreInput.value.trim();
    if (genre === "") {
        alert("Please enter a movie genre.");
        return;
    }
    if (favouriteGenres.length >= 5) {
        alert("You cannot add more than 5 favourite genres.");
        return;
    }
    favouriteGenres.push(genre);
    genreInput.value = "";
    displayGenres();
});
function displayGenres() {
    genreList.innerHTML = "";
    favouriteGenres.forEach(function (genre, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${index + 1}. ${genre}</span>
            <button
                type="button"
                class="remove-btn"
                onclick="removeGenre(${index})"
            >
                Remove
            </button>
        `;
        genreList.appendChild(li);
    });
    genreCount.textContent = favouriteGenres.length;
}
function removeGenre(index) {
    favouriteGenres.splice(index, 1);
    displayGenres();
}
addMovieButton.addEventListener("click", function () {
    const movie = movieInput.value.trim();
    if (movie === "") {
        alert("Please enter a movie name.");
        return;
    }
    if (favouriteMovies.length >= 5) {
        alert("You cannot add more than 5 favourite movies.");
        return;
    }
    favouriteMovies.push(movie);
    movieInput.value = "";
    displayMovies();
});
function displayMovies() {
    movieList.innerHTML = "";
    favouriteMovies.forEach(function (movie, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${index + 1}. ${movie}</span>
            <button
                type="button"
                class="remove-btn"
                onclick="removeMovie(${index})"
            >
                Remove
            </button>
        `;
        movieList.appendChild(li);
    });
    movieCount.textContent = favouriteMovies.length;
}
function removeMovie(index) {
    favouriteMovies.splice(index, 1);
    displayMovies();
}
movieForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (favouriteGenres.length === 0) {
        alert("Please add at least 1 favourite genre.");
        return;
    }
    if (favouriteGenres.length > 5) {
        alert("You cannot have more than 5 favourite genres.");
        return;
    }
    if (favouriteMovies.length === 0) {
        alert("Please add at least 1 favourite movie.");
        return;
    }
    if (favouriteMovies.length > 5) {
        alert("You cannot have more than 5 favourite movies.");
        return;
    }
    if (editMode === true) {
        users[editingUserIndex].name = name;
        users[editingUserIndex].email = email;
        users[editingUserIndex].genres = [...favouriteGenres];
        users[editingUserIndex].movies = [...favouriteMovies];
        alert("Survey updated successfully!");
        editMode = false;
        editingUserIndex = null;
        displayAllUsers();
        resetForm();
    } else {
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            genres: [...favouriteGenres],
            movies: [...favouriteMovies]
        };
        users.push(newUser);
        alert("Survey submitted successfully!");
        displayAllUsers();
        resetForm();
    }
});
function displayAllUsers() {
    let usersContainer = document.getElementById("usersContainer");
    if (!usersContainer) {
        usersContainer = document.createElement("div");
        usersContainer.id = "usersContainer";
        usersContainer.className = "users-container";
        movieForm.parentNode.appendChild(usersContainer);
    }
    usersContainer.innerHTML = "";
    users.forEach(function (user, index) {
        const userCard = document.createElement("div");
        userCard.className = "result";
        let genresHTML = "";
        user.genres.forEach(function (genre) {
            genresHTML += `<li>${genre}</li>`;
        });
        let moviesHTML = "";
        user.movies.forEach(function (movie) {
            moviesHTML += `<li>${movie}</li>`;
        });
        userCard.innerHTML = `
            <h2>🎬 User ${index + 1}</h2>
            <div class="user-info">
                <p>
                    <strong>Name:</strong>
                    ${user.name}
                </p>
                <p>
                    <strong>Email:</strong>
                    ${user.email}
                </p>
            </div>
            <h3>Favourite Genres</h3>
            <ol>
                ${genresHTML}
            </ol>
            <h3>Favourite Movies</h3>
            <ol>
                ${moviesHTML}
            </ol>
            <button
                type="button"
                class="update-btn"
                onclick="startUpdate(${index})"
            >
                ✏️ Update Survey
            </button>
        `;
        usersContainer.appendChild(userCard);
    });
}
function startUpdate(index) {
    const user = users[index];
    editMode = true;
    editingUserIndex = index;
    nameInput.value = user.name;
    emailInput.value = user.email;
    favouriteGenres = [...user.genres];
    favouriteMovies = [...user.movies];
    displayGenres();
    displayMovies();
    submitButton.textContent = "Save Updated Survey";
    movieForm.scrollIntoView({
        behavior: "smooth"
    });
    alert(
        "You are now editing " +
        user.name +
        "'s survey. Click 'Save Updated Survey' to save your changes."
    );
}
function resetForm() {
    nameInput.value = "";
    emailInput.value = "";
    genreInput.value = "";
    movieInput.value = "";
    favouriteGenres = [];
    favouriteMovies = [];
    editMode = false;
    editingUserIndex = null;
    submitButton.textContent = "Submit Survey";
    displayGenres();
    displayMovies();
}