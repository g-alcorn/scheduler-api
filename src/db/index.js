const pg = require("pg");

const client = new pg.Client({
  user: 'development',
  password: 'development',
  database: 'scheduler_development',
  connectionString: process.env.DATABASE_URL || ""
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
