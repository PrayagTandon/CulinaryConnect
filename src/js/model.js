import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

/* Contains the state object, business logic and the HTTP library... */

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],
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

        // Bookmarked Recipe Check
        if (state.bookmarks.some(bookmark => bookmark.id === id)) {
            state.recipe.bookmarked = true;
        }
        else {
            state.recipe.bookmarked = false;
        }

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
        state.search.page = 1;
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
};

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ingredient => {
        ingredient.quantity = ingredient.quantity * newServings / state.recipe.servings;
    });

    state.recipe.servings = newServings;
};

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function (recipe) {
    // Add Bookmark
    state.bookmarks.push(recipe);

    // Mark currrent recipe as bookmark
    state.recipe.bookmarked = true;

    persistBookmarks();
};

export const deleteBookmark = function (id) {
    // Delete Bookmark
    const index = state.bookmarks.findIndex(element => element.id === id);
    state.bookmarks.splice(index, 1);

    // Mark current recipe as NOT bookmarked
    state.recipe.bookmarked = false;

    persistBookmarks();
};

// const init = function () {
//     const storage = localStorage.getItem('bookmarks');
//     if (storage) state.bookmarks = JSON.parse(storage);
// }
// init();