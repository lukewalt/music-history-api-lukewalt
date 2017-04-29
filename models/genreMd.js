'use strict';

const { bookshelf } = require('../db/database');

const Genres = bookshelf.Model.extend({
  tableName: 'genre'
}, {
  getAll: function(){
    return this.forge()
    .fetchAll()
    .then( rows => rows)
    .catch( error => error )
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch()
    .then( genre => genre )
    .catch( err => err )
  }

})

module.exports = bookshelf.model('Genres', Genres);
