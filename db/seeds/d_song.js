
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song').del()
  .then(function () {
    // Inserts seed entries
    return Promise.all([
      knex('song').insert({
        title: "99 Problems",
        song_length: 61,
        release_date: "11/14/2003",
        genre_id: 1,
        artist_id: 1,
        album_id: 1,
      }),
      knex('song').insert({
        title: "Sgt. Pepper's",
        song_length: 123,
        release_date: "06/01/1967",
        genre_id: 2,
        artist_id: 2,
        album_id: 2,
      }),
      knex('song').insert({
        title: "Come Together",
        song_length: 241,
        release_date: "6/14/1979",
        genre_id: 3,
        artist_id: 3,
        album_id: 3,
      }),
      knex('song').insert({
        title: "Revolver",
        song_length: 231,
        release_date: "08/05/1966",
        genre_id: 4,
        artist_id: 4,
        album_id: 4,
      }),
      knex('song').insert({
        title: "Miles Ahead",
        song_length: 233,
        release_date: "10/21/1957",
        genre_id: 5,
        artist_id: 5,
        album_id: 5,
      }),
      knex('song').insert({
        title: "Moanin' in the Moonlight",
        song_length: 421,
        release_date: "05/14/1959",
        genre_id: 6,
        artist_id: 6,
        album_id: 6,
      })
    ])

  });
};
