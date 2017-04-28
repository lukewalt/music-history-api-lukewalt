
module.exports = {

  development: {
    client: 'postgresql',
    connection: ,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: './musichistory.db',
    connection: {
      database: 'my_db'
    },

  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
  }

};
