const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// API location -> https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

/* First API call */

const showRecipe = async function () {
  try {
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status}) - Invalid ID requested!!`);

    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      img: recipe.image_url,
      cookingTime: recipe.cooking_time,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceURL: recipe.source_url,
      title: recipe.title,
      ingredients: recipe.ingredients,
    }

    console.log(recipe);
  }
  catch (err) {
    alert(err)
  }
}
showRecipe();
