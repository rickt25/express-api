const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'covid-api'
    }
})

module.exports = knex