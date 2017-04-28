
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('album', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('release_date').notNullable();
    table.integer('ablum_length').unsigned();
    table.string('label').notNullable();
    table.integer('artist_id').unsigned().references(artist.id);
    table.integer('genre_id').unsigned().references(genre.id);
  })
  .createTable('artist', function(table){
    table.increments();
    table.string('artist_name').notNullable();
    table.integer('year_established').unsigned();
  })
  .createTable('genre', function(table){
    table.increments();
    table.string('label').notNullable();
  })
  .createTable('song', function(table){
    table.increments();
    table.string('title').notNullable();
    table.integer('song_length').unsigned();
    table.integer('release_date').unsigned().references(album.release_date);
    table.integer('genre_id').unsigned().references(genre.id);
    table.integer('artist_id').unsigned().references(artist.id);
    table.integer('album_id').unsigned().references(album.id);
  })

};

exports.down = (knex, Promise) => knex.schema.dropTable('album').dropTable('artist').dropTable('genre').dropTable('song')
