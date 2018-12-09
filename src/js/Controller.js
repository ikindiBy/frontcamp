'use strict'

import  { getShortListItems } from './helpers';
import  { NUMBER_ITEMS } from './constants';

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    initialize() {
        this.view.onClickToShowListSourcesByCategory = this.showListSourcesByCategory.bind(this);
        this.view.onClickToShowRecordsBySourceId = this.showRecordsBySourceId.bind(this);
        this.view.renderCategoriesNav();
    }

    async showListSourcesByCategory (e) {
        try {
            const target = e.target.dataset.cateoryId;
            const sources = await this.model.getListSourcesByCategory(target);

            if (sources.length > NUMBER_ITEMS) {
                this.view.renderListSourcesByCategory(getShortListItems(sources));;
                throw new Error(`Too many results. We left only ${NUMBER_ITEMS} the most relevant.`);
            } else if (sources.length === 0) {
                throw new Error('No results was found. Maybe there is some problem on server side. Try again.');
            }else {
                this.view.renderListSourcesByCategory(sources);
            }
        } catch (err) {
            import(/* webpackChunkName: "ErrorHandler" */ './ErrorHandler').then(module => {
                const ErrorHandler = module.default;
                const errorHandler = new ErrorHandler();
                errorHandler.showErrorModal(err);
            });
        }
    }

    async showRecordsBySourceId (e) {
        const target = e.target.dataset.sourceId;
        const articles = await this.model.getArticlesBySourceId(target);
        this.view.renderArticlesBySourceId(articles);
    }






}

