import View from "./view.js";
import icons from '../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const currPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Private Fields
        const _nextPageBtn = `
            <button class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;

        const _prevPageBtn = `
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>
        `;

        // At Page 1 and there are other pages
        if (currPage === 1 && numPages > 1) {
            return _nextPageBtn;
        };

        // Last Page
        if (currPage === numPages && numPages > 1) {
            return _prevPageBtn;
        };

        // Any other page
        if (currPage !== 1 && this._data.page < numPages) {
            return `${_prevPageBtn}${_nextPageBtn}`
        };

        // At Page 1 and there are NO other pages
        return ``;
    }

};

export default new PaginationView();