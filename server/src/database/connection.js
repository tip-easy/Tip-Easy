const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URI || 'mongodb://localhost:27017/';
const dbClient = new MongoClient(uri, { useNewUrlParser: true });

// Mongo Node driver uses callbacks, I prefer Promises
// Here we are wrapping the database connection method
// in a Promise that resolves when connection is successful
const dbConnection = new Promise((resolve, reject) => {
  dbClient.connect((err, connection) => {
    if (err) {
      dbClient.close();
      reject(err);
    } else if (connection) {
      resolve(connection)
    }
  });
})

// Export the client so that client connection can 
// be closed elsewhere in the application
module.exports = { dbConnection, dbClient };
