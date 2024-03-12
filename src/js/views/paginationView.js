import View from "./view.js";
import icons from '../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = this._data.results.length / this._data.resultsPerPage;
        console.log(numPages, this._data.results);

        // At Page 1 and there are other pages


        // At Page 1 and there are NO other pages


        // Last Page


        // Any other page
    }
};

export default new PaginationView();