import './style.css';
// Game with ID: BNOLQBZcVVeGTlilUmqs added. Mm7ECLqhtl1z5btD4VDF
import render from './Modules/render.js';
import postscores from './Modules/postscore.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Mm7ECLqhtl1z5btD4VDF/scores/';

const refreshid = document.getElementById('refresh');
const form = document.getElementById('form');

refreshid.addEventListener('click', () => {
  render(url);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const button = document.querySelector('#freese');
  const username = form.username.value;
  const score = form.score.value;
  postscores(url, username, score);
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  render(url);
});