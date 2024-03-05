import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');


// API location -> https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading the recipe
    await model.loadRecipe(id);

    // 2) Rendering the call
    recipeView.render(model.state.recipe);
  }
  catch (err) {
    alert(err)
  }
};

/* Easier way to listen to all changes */
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

