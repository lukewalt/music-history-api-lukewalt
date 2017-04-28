
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album').del()
  .then(function () {
    // Inserts seed entries
    return Promise.all([
      knex('album').insert({
        name: "The Black Album",
        release_date: "11/14/2003",
        ablum_length: 2268,
        label: "Def Jam",
        artist_id: 27,
        genre_id: 13
      }),
      knex('album').insert({
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        release_date: "06/01/1967",
        ablum_length: 2392,
        label: "Stones Throw Records",
        artist_id: 6,
        genre_id: 2
      }),
      knex('album').insert({
        name: "Tres Hombres",
        release_date: "6/14/1979",
        ablum_length: 321,
        label: "Warner Bros.",
        artist_id: 3,
        genre_id: 2
      }),
      knex('album').insert({
        name: "Revolver",
        release_date: "08/05/1966",
        ablum_length: 2083,
        label: "Parlophone",
        artist_id: 6,
        genre_id: 2
      }),
      knex('album').insert({
        name: "Miles Ahead",
        release_date: "10/21/1957",
        ablum_length: 2132,
        label: "Columbia",
        artist_id: 24,
        genre_id: 4
      }),
      knex('album').insert({
        name: "Moanin' in the Moonlight",
        release_date: "05/14/1959",
        ablum_length: 2033,
        label: "Chess",
        artist_id: 7,
        genre_id: 3
      })
    ])

  });
};
