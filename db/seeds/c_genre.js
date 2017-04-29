
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genre').del()
  .then(function () {
    // Inserts seed entries
    return Promise.all([
      knex('genre').insert({
        label: "Hip-Hop"
      }),
      knex('genre').insert({
        label: "Soul"
      }),
      knex('genre').insert({
        label: "Rock"
      }),
      knex('genre').insert({
        label: "Jazz"
      }),
      knex('genre').insert({
        label: "Country"
      })
    ])

  });
};
