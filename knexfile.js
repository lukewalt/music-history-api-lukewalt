
module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
