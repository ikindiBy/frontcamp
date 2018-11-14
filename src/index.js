'use strict'

import  { KEY, ALL_COUNTRIES_FROM_API, ALL_CATEGORIES } from './constants.js';

const navigationCategories = document.getElementById('categories_nav');
const elem = document.getElementById('firstPoint');

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

const showListSourcesByCategory = (categoryId) => {
    const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${KEY}`;
    const req = new Request(url);

    fetch(req)
        .then((result) => result.json())
        .then(res => {
            const listSources = res.sources;
            
            let ii = 1;
            const ul = document.createElement('ul');

            listSources.forEach( source => {
                const li = document.createElement('lo');
                li.innerHTML = `<div class="title-article" data-source-id="${source.id}"> ${ii} ${source.name} </div>`;
                ul.appendChild(li);
                ii++;
            })

            elem.innerHTML = '';
            elem.appendChild(ul);
            ul.addEventListener('click', e => {
                showRecordsBySourceId(e.target.dataset.sourceId);
            });
            
    })
    .catch(err => {
        console.log('Fetch Error: ', err);
    });
};

const showRecordsBySourceId = (sourceId) => {

    const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${KEY}`;
    const req = new Request(url);

    fetch(req)
    .then((result) => result.json())
    .then(res => {
        const listArticles = res.articles;
        const ul = document.createElement('ul');

        console.log('*************************** ', listArticles);

        listArticles.forEach( article => {
            const li = document.createElement('li');
            const urlImage = article.urlToImage || './images/noimage.png';
            li.innerHTML = `<div class="title-article" data-article-id="${article.id}"> <img src=${urlImage}> <p>${article.title} </p></div>`;
            ul.appendChild(li);
        })

        elem.innerHTML = '';
        elem.appendChild(ul);
    })
    .catch(err => {
        console.log('Fetch Error: ', err);
    });
}

createCategoriesNav();