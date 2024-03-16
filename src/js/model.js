import { API_URL, RES_PER_PAGE, KEY } from "./config.js";
import { AJAX } from "./helpers.js";

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

const createRecipeObject = function (data) {
    const { recipe } = data.data;
    return state.recipe = {
        id: recipe.id,
        img: recipe.image_url,
        cookingTime: recipe.cooking_time,
        publisher: recipe.publisher,
        servings: recipe.servings,
        sourceURL: recipe.source_url,
        title: recipe.title,
        ingredients: recipe.ingredients,
        ...(recipe.key && { key: recipe.key }),
    };
}

export const loadRecipe = async function (id) {

    try {
        const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
        state.recipe = createRecipeObject(data);

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
        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                img: recipe.image_url,
                publisher: recipe.publisher,
                title: recipe.title,
                ...(recipe.key && { key: recipe.key }),
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

const init = function () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
}
init();

export const uploadRecipe = async function (newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {
            const ingArr = ing[1].split(',').map(el => el.trim());
            if (ingArr.length !== 3) throw new Error(`Wrong Ingredient format! Please enter the ingredients in correct format :)`);

            const [qunatity, unit, description] = ingArr
            return { qunatity: qunatity ? +qunatity : null, unit, description };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients,
        };

        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    }
    catch (err) {
        throw err;
    }
};