'use strict'

let arrNews = require('../data_model/news.db');

const getAllNews = () => {
    return arrNews.map(item => item.post);
};

const getNewsById = (id) => {
    id = parseInt(id,10);
    const result = arrNews.filter(item => item.id === id);
    return result;
}

const deleteNewsById = (id) => {
    id = parseInt(id,10);
    arrNews = arrNews.filter(item => item.id !== id);
    return arrNews;
}

module.exports =  { getAllNews: getAllNews, getNewsById: getNewsById };
