
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
  .then(function () {
    // Inserts seed entries
    return Promise.all([
      knex('artist').insert({
        artist_name: "Jay-Z",
        year_established: 1986
      }),
      knex('artist').insert({
        artist_name: "The Beatles",
        year_established: 1960
      }),
      knex('artist').insert({
        artist_name: "ZZ-Top",
        year_established: 1969
      }),
      knex('artist').insert({
        artist_name: "Frank Ocean",
        year_established: 2010
      }),
      knex('artist').insert({
        artist_name: "Johnny Cash",
        year_established: 1950
      })
    ])

  });
};
