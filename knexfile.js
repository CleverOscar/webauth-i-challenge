// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    debug: true,
    connection: {
      filename: './data/lambda.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA forgein_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    }
  }

};
