'use strict'

import  { KEY, ALL_CATEGORIES } from './constants';
import  { createListArticles, createListSources } from './viewCreators';

const navigationCategories = document.getElementById('categories_nav');
const sourcesGroup = document.getElementById('sources_group');
const newsGroup = document.getElementById('news_group');

const createCategoriesNav = () => {
    ALL_CATEGORIES.forEach(cat => {
        const divCat = document.createElement('div');
        divCat.innerHTML = `<span class="cat_of_source" data-cateory-id="${cat}"> ${cat.toUpperCase()} </span>`;
        navigationCategories.appendChild(divCat);
    });

    navigationCategories.addEventListener('click', e => {
        showListSourcesByCategory(e.target.dataset.cateoryId);  
    })
};

const  fetchMy = async (url) => {
    const req = new Request(url);
    let result = [];
    try {
        const response = await fetch(req);
        result = await response.json();
    } catch(err) {
        console.log('Fetch Error: ', err);
    } finally {
        return result;
    }
} 

const showListSourcesByCategory = async (categoryId) => {
    const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${KEY}`;
    const response = await fetchMy(url);
    const div = createListSources(response.sources);

    sourcesGroup.innerHTML = '';
    sourcesGroup.appendChild(div);
    div.addEventListener('click', e => {
        showRecordsBySourceId(e.target.dataset.sourceId);
    });   
};

const showRecordsBySourceId = async (sourceId) => {
    const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${KEY}`;
    const response = await fetchMy(url);
    const ul = createListArticles(response.articles);
    
    newsGroup.innerHTML = '';
    newsGroup.appendChild(ul);
}

createCategoriesNav();