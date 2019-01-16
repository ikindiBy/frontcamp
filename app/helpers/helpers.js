'use strict'

let arrNews = require('../data_model/news.db');

const getAllNews = () => {
    return arrNews.map(item => item.post);
};

const getNewsById = (id) => {
    console.log('______',id );
    return arrNews.filter(item => item.id === id);
}

const deleteNewsById = (id) => {
    return arrNews.filter(item => item.id === id);
}

module.exports =  { getAllNews: getAllNews, getNewsById: getNewsById };
