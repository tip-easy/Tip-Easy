const { dbConnection, dbClient } = require('./connection');

async function getCollection({ db = 'tipeasyusers', collection }) {
  // Await successful db connection
  const connection = await dbConnection;
  // Return required collection & Mongo client instance
  return [connection.db(db).collection(collection), dbClient];
}

module.exports = getCollection;