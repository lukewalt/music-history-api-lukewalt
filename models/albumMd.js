'use strict';

const { bookshelf } = require('../db/database');

const Albums = bookshelf.Model.extend({
  tableName: 'album'
}, {
  getAll: function() {
    console.log('MODEL: getting all albums');
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

module.exports = bookshelf.model('Album', Albums);
