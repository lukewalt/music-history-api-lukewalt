'use strict';

const envirnoment = process.env.NODE_ENV || 'development'
// Setup the configuration module for knex and bookshelf
const config = require('../knexfile')[envirnoment]
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

// Resolve circular dependencies with relations, ie models requiring each other
// when defining relationships
bookshelf.plugin('registry');


module.exports = { knex, bookshelf };
