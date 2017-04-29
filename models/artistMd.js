'use strict';

const { bookshelf } = require('../db/database');

const Artists = bookshelf.Model.extend({
  tableName: 'artist'
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
  }
})


module.exports = bookshelf.model('Artists', Artists);
