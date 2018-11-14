'use strict'

import  { KEY, ALL_CATEGORIES } from './constants';
import  { validateImageSource } from './helpers';

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

const showListSourcesByCategory = (categoryId) => {
    const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${KEY}`;
    const req = new Request(url);

    fetch(req)
    .then((result) => result.json())
    .then(res => {
        const listSources = res.sources;
        const div = document.createElement('div');
        div.classList.add("set_resources");

        listSources.forEach( source => {
            const divForSource = document.createElement('div');

            divForSource.innerHTML = `<a href="#news_group">
                                        <p class="title-source" data-source-id="${source.id}"> 
                                            ${source.name} 
                                        </p>
                                    </a>`;

            div.appendChild(divForSource);
        })

        sourcesGroup.innerHTML = '';
        sourcesGroup.appendChild(div);
        div.addEventListener('click', e => {
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

        listArticles.forEach( article => {
            const li = document.createElement('li');
            const urlToImage = article.urlToImage;
            const urlImage = validateImageSource(urlToImage) ? urlToImage : './images/noimage.png';
             
            li.innerHTML = `<div class="title-article" data-article-id="${article.id}"> <img src=${urlImage}> <p>${article.title} </p></div>`;
            ul.appendChild(li);
        })

        newsGroup.innerHTML = '';
        newsGroup.appendChild(ul);
    })
    .catch(err => {
        console.log('Fetch Error: ', err);
    });
}

createCategoriesNav();
