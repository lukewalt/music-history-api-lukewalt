
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album').del()
  .then(function () {
    // Inserts seed entries
    return Promise.all([
      knex('album').insert({
        name: "The Black Album",
        release_date: "11/14/2003",
        album_length: 2268,
        label: "Def Jam",
        artist_id: 1,
        genre_id: 1
      }),
      knex('album').insert({
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        release_date: "06/01/1967",
        album_length: 2392,
        label: "Stones Throw Records",
        artist_id: 2,
        genre_id: 2
      }),
      knex('album').insert({
        name: "Tres Hombres",
        release_date: "6/14/1979",
        album_length: 321,
        label: "Warner Bros.",
        artist_id: 3,
        genre_id: 2
      }),
      knex('album').insert({
        name: "Revolver",
        release_date: "08/05/1966",
        album_length: 2083,
        label: "Parlophone",
        artist_id: 4,
        genre_id: 2
      }),
      knex('album').insert({
        name: "Miles Ahead",
        release_date: "10/21/1957",
        album_length: 2132,
        label: "Columbia",
        artist_id: 5,
        genre_id: 4
      }),
      knex('album').insert({
        name: "Moanin' in the Moonlight",
        release_date: "05/14/1959",
        album_length: 2033,
        label: "Chess",
        artist_id: 6,
        genre_id: 3
      })
    ])

  });
};
