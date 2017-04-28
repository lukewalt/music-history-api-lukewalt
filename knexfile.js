
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './musichistory.db'
    },
    useNullAsDefault: true
  },

  staging: {
    client: './musichistory.db',
    connection: {
      database: 'my_db'
    },

  },

  production: {
    client: 'sqlite3',
    connection: {
      database: './musichistory.db'
    },
  }

};
