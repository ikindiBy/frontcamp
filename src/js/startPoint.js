'use strict'

const button = document.getElementById('show_news');

button.onclick = e => import(/* webpackChunkName: "print" */ './index').then(module => {
    const index = module.default;
    index();
});



