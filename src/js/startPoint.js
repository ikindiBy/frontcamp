'use strict'

import '@babel/polyfill';
import "isomorphic-fetch";
import "../style/style.css";
import "../images/noimage.png";

import  Controller from './Controller';
import  View from './View';
import  DataModel from './DataModel';


const targetElement = document.getElementById('categories_nav');

const view = new View(targetElement);
const model = new DataModel();
const controller = new Controller(view, model);

controller.initialize();



