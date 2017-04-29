'use strict'

// Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db
const { bookshelf } = require('../db/database');
require('./artistMd');
require('./genreMd');
require('./albumMd');
// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
const Songs = bookshelf.Model.extend({
  tableName: 'song',
  artist: function() { return this.belongsTo('Artists')},
  genre: function() { return this.belongsTo('Genres')},
  album: function() { return this.belongsTo('Albums')}

}, {
  getAll: function() {
     return this.forge()
    .fetchAll()
    .then( rows => rows )
    .catch( error => error )
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch()
    .then( song => song )
    .catch( err => err )
  }

})

module.exports = bookshelf.model('Songs', Songs);
