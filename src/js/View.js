'use strict'

import  { ALL_CATEGORIES } from './constants';
import  { validateImageSource } from './helpers';

export default class View {
    constructor(element) {
        this.element = element;
        this.onClickToShowListSourcesByCategory = null;
        this.onClickToShowRecordsBySourceId = null;
    }

    renderCategoriesNav() {
        const navigationCategories = document.getElementById('categories_nav');
        ALL_CATEGORIES.forEach((cat) => {
            const divCat = document.createElement('div');
            divCat.innerHTML = `<span class="cat_of_source" data-cateory-id="${cat}"> ${cat.toUpperCase()} </span>`;
            navigationCategories.appendChild(divCat);
        });

        navigationCategories.addEventListener('click', this.onClickToShowListSourcesByCategory);  
    }

    createListSources(sources) {
        const div = document.createElement('div');
        div.classList.add("set_resources");
    
        sources.forEach( source => {
            const {name, id} = source;
            const divForSource = document.createElement('div');
    
            divForSource.innerHTML = `<a href="#news_group">
                                        <p class="title-source" data-source-id="${id}"> 
                                            ${name} 
                                        </p>
                                    </a>`;
    
            div.appendChild(divForSource);
            });
        return div;
    }

    renderListSourcesByCategory (sources) {
        const sourcesGroup = document.getElementById('sources_group');
        const div = this.createListSources(sources);
    
        sourcesGroup.innerHTML = '';
        sourcesGroup.appendChild(div);
        div.addEventListener('click', this.onClickToShowRecordsBySourceId);  
    };

    createListArticles(articles) {
        const ul = document.createElement('ul');
        const pathToMockImg = `http://fpoimg.com/300x250?text=No_image`;
    
        articles.forEach(article => {
            const li = document.createElement('li');
            const {urlToImage, title, description, author} = article;
    
            if (!urlToImage && !title && !description && !author) return;
    
            const urlImage = validateImageSource(urlToImage) ? urlToImage : pathToMockImg;
            const authorTag = author ? `<h5>${author} </h5>` : '';
            const descriptionTag = description ? `<p>${description} </p>` : '';
            li.innerHTML = `<div class="title-article"> 
                                <img src=${urlImage}>
                                <div>
                                    <h3>${title} </h3>
                                    ${authorTag}
                                    ${descriptionTag}
                                </div>
                                </div>`;
            ul.appendChild(li);
        })
        return  ul;
    }

    renderArticlesBySourceId(articles) {
        const newsGroup = document.getElementById('news_group');
        const ul = this.createListArticles(articles);
        
        newsGroup.innerHTML = '';
        newsGroup.appendChild(ul);
    };

}



