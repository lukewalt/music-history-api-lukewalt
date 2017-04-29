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
  },
  addOne: function(newAlbum){
    return this.forge(newAlbum)
    .save()
    .then( newAlbum => newAlbum )
    .catch( error => error )
  },
  removeOne: function(id) {
    return this.forge({id})
    .destroy()
    .then( album => album)
    .catch( error => error )
  }
})

module.exports = bookshelf.model('Album', Albums);
