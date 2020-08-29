const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const showJoke = (joke) => {
  const sectionJoke = document.querySelector('.joke');
  sectionJoke.innerHTML = joke;
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => showJoke(data.joke))
};

window.onload = () => fetchJoke();