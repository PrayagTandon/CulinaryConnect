import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

/* Contains the state object, business logic and the HTTP librrary... */

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
};

export const loadRecipe = async function (id) {

    try {
        const data = await getJSON(`${API_URL}${id}`)

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

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);

        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                img: recipe.image_url,
                publisher: recipe.publisher,
                title: recipe.title,
            };
        });
    }
    catch (err) {
        console.error(`${err} 🔥🔥🔥🔥`);
        throw err;
    }
};

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage //0;
    const end = page * state.search.resultsPerPage //9;
    return state.search.results.slice(start, end);
}

