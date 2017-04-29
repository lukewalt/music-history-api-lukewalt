'use strict';

const { bookshelf } = require('../db/database');

const Albums = bookshelf.Model.extend({
  tableName: 'album'
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( rows => {
      return rows
    })
    .catch( error => {
      return error
    })
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch()
    .then( album => {
      return album
    })
    .catch( error => error)

  }
})

module.exports = bookshelf.model('Album', Albums);
