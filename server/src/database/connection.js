const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URI || 'mongodb://localhost:27017/';
const dbClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 });

// Mongo Node driver uses callbacks, I prefer Promises
// Here we are wrapping the database connection method
// in a Promise that resolves when connection is successful
function getDbConnection() {
  if (!process.env.DB_URI) {
    console.warn('No DB_URI environment variable found.\nPlease make sure you are running mongo locally for things to work.\n');
  }
  return new Promise((resolve, reject) => {
    dbClient.connect((err, connection) => {
      console.log('connecting to db...');
      if (err) {
        dbClient.close();
        console.log('db connection failed');
        reject(err);
      } else if (connection) {
        resolve(connection);
      }
    });
  });
}

// Export the client so that client connection can 
// be closed elsewhere in the application
module.exports = { getDbConnection, dbClient };
