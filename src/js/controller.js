import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');
// const searchBtn = document.querySelector('.search__btn');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// API location -> https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // Rendering the spinner
    renderSpinner(recipeContainer);

    // Loading the recipe
    await model.loadRecipe(id);

    /* 2) Rendering the call */
    recipeView.render(model.state.recipe);
  }
  catch (err) {
    alert(err)
  }
};

/* Easier way to listen to all changes */
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

