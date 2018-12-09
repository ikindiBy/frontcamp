'use strict'

import  ErrorHandler from './ErrorHandler';
import  { getShortListItems } from './helpers';
import  { NUMBER_ITEMS } from './constants';

const errorHandler = new ErrorHandler();

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
            console.log('cathed')
            errorHandler.showErrorModal(err);
        }
    }

    async showRecordsBySourceId (e) {
        const target = e.target.dataset.sourceId;
        const articles = await this.model.getArticlesBySourceId(target);
        this.view.renderArticlesBySourceId(articles);
    }






}

