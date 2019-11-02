const { getDbConnection, dbClient } = require('./connection');

// TODO: Turn this function into a HOF. Usage: getCollection('dbname')('collection')
async function getCollection(collection, db = 'tipeasyusers') {
  // Await successful db connection
  const connection = await getDbConnection();
  // Return required collection & Mongo client instance
  return [connection.db(db).collection(collection), dbClient];
}

module.exports = getCollection;