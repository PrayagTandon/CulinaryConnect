import View from "./view.js";
import previewView from "./previewView.js";

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
    _successMessage = '';

    _generateMarkup() {
        console.log(this._data);
        return this._data.map(result => previewView.render(result)).join('');
    }
};

export default new BookmarksView();
