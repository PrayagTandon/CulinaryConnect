import View from "./view.js";
import icons from '../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);

        // At Page 1 and there are other pages
        if (this._data.page === 1 && numPages > 1) {
            return `Page 1, Other page available`;
        };

        // Last Page
        if (this._data.page === numPages && numPages > 1) {
            return `Last Page`
        };

        // Any other page
        if (this._data.page !== 1 && this._data.page < numPages) {
            return `Any other page`;
        };

        // At Page 1 and there are NO other pages
        return `No other page`;
    }
};

export default new PaginationView();