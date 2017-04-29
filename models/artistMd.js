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
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch()
    .then( artist => aritst )
    .catch(error => error)
  }
})


module.exports = bookshelf.model('Artists', Artists);
