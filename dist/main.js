!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r="9ea41e2e635e4b6e9aa7c9d2d3d1ec05",o=["general","business","entertainment","health","science","sports","technology"],c=document.getElementById("categories_nav"),a=document.getElementById("sources_group"),s=document.getElementById("news_group"),i=e=>{const t=`https://newsapi.org/v2/sources?category=${e}&apiKey=${r}`,n=new Request(t);fetch(n).then(e=>e.json()).then(e=>{const t=e.sources,n=document.createElement("div");n.classList.add("set_resources"),t.forEach(e=>{const t=document.createElement("div");t.innerHTML=`<a href="#news_group">\n                                        <p class="title-source" data-source-id="${e.id}"> \n                                            ${e.name} \n                                        </p>\n                                    </a>`,n.appendChild(t)}),a.innerHTML="",a.appendChild(n),n.addEventListener("click",e=>{d(e.target.dataset.sourceId)})}).catch(e=>{console.log("Fetch Error: ",e)})},d=e=>{const t=`https://newsapi.org/v2/top-headlines?sources=${e}&apiKey=${r}`,n=new Request(t);fetch(n).then(e=>e.json()).then(e=>{const t=e.articles,n=document.createElement("ul");t.forEach(e=>{const t=document.createElement("li"),r=e.urlToImage,o=(e=>!(!e||"http"!==e.slice(0,4)))(r)?r:"./images/noimage.png";t.innerHTML=`<div class="title-article" data-article-id="${e.id}"> <img src=${o}> <p>${e.title} </p></div>`,n.appendChild(t)}),s.innerHTML="",s.appendChild(n)}).catch(e=>{console.log("Fetch Error: ",e)})};o.forEach(e=>{const t=document.createElement("div");t.innerHTML=`<span class="cat_of_source" data-cateory-id="${e}"> ${e.toUpperCase()} </span>`,c.appendChild(t)}),c.addEventListener("click",e=>{i(e.target.dataset.cateoryId)})}]);