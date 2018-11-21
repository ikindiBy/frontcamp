'use strict'

import  { KEY, ALL_CATEGORIES } from './constants';
import  { createListArticles, createListSources } from './viewCreators';
import  { fetchByURL } from './helpers';

const createCategoriesNav = () => {
    const navigationCategories = document.getElementById('categories_nav');

    ALL_CATEGORIES.forEach(cat => {
        const divCat = document.createElement('div');
        divCat.innerHTML = `<span class="cat_of_source" data-cateory-id="${cat}"> ${cat.toUpperCase()} </span>`;
        navigationCategories.appendChild(divCat);
    });

    navigationCategories.addEventListener('click', e => {
        showListSourcesByCategory(e.target.dataset.cateoryId);  
    })
};

const showListSourcesByCategory = async (categoryId) => {
    const sourcesGroup = document.getElementById('sources_group');

    const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${KEY}`;
    const response = await fetchByURL(url);
    const div = createListSources(response.sources);

    sourcesGroup.innerHTML = '';
    sourcesGroup.appendChild(div);
    div.addEventListener('click', e => {
        showRecordsBySourceId(e.target.dataset.sourceId);
    });   
};

const showRecordsBySourceId = async (sourceId) => {
    const newsGroup = document.getElementById('news_group');
    
    const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${KEY}`;
    const response = await fetchByURL(url);
    const ul = createListArticles(response.articles);
    
    newsGroup.innerHTML = '';
    newsGroup.appendChild(ul);
}

createCategoriesNav();