import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";

/* Contains the state object, business logic and the HTTP librrary... */

export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {

    try {
        /* Making an API call */
        const res = await fetch(`${API_URL}/${id}`);

        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status}) - Invalid ID requested!!`);

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
        alert(err);
    }
};