'use strict'

import  { KEY } from './constants';
import  { fetchByURL } from './helpers';

export default class DataModel {

    async getListSourcesByCategory (categoryId) {
        const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${KEY}`;
        const response = await fetchByURL(url);
        return response.sources;
    };

    async getArticlesBySourceId (sourceId) {
        const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${KEY}`;
        const response = await fetchByURL(url);
        return response.articles;
    };
}


