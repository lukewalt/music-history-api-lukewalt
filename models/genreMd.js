'use strict';

const { bookshelf } = require('../db/database');

const Genres = bookshelf.Model.extend({
  tableName: 'genre'
}, {
  getAll: function(){
    return this.forge()
    .fetchAll()
    .then( rows => {
      return rows
    })
    .catch( error => {
      return error
    })
  }

})

module.exports = bookshelf.model('Genres', Genres);
