'use strict'

import  { validateImageSource } from './helpers';

const createListArticles = (articles) => {
    const ul = document.createElement('ul');

    articles.forEach(article => {
        const li = document.createElement('li');
        const {urlToImage, title, description, author} = article;

        if (!urlToImage && !title && !description && !author) return;

        const urlImage = validateImageSource(urlToImage) ? urlToImage : './images/noimage.png';
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
};

const createListSources = (sources) => {
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

export {
    createListArticles,
    createListSources,
};

