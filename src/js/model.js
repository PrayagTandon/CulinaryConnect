import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

/* Contains the state object, business logic and the HTTP librrary... */

export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {

    try {
        const data = await getJSON(`${API_URL}/${id}`)

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            img: recipe.image_url,
            cookingTime: recipe.cooking_time,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceURL: recipe.source_url,
            title: recipe.title,
            ingredients: recipe.ingredients,
        };
    } catch (err) {
        console.error(`${err} 🔥🔥🔥🔥`);
        throw err;
    }
};