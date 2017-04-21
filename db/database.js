'use strict';

// Setup the configuration module for knex and bookshelf
const config = require('../knexfile')['development']
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

// Resolve circular dependencies with relations, ie models requiring each other
// when defining relationships
bookshelf.plugin('registry');


module.exports = { knex, bookshelf };
