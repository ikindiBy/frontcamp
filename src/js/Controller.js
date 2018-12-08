'use strict'

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
        const target = e.target.dataset.cateoryId;
        const sources = await this.model.getListSourcesByCategory(target);
        this.view.renderListSourcesByCategory(sources);
    }

    async showRecordsBySourceId (e) {
        const target = e.target.dataset.sourceId;
        const articles = await this.model.getArticlesBySourceId(target);
        this.view.renderArticlesBySourceId(articles);
    }






}

