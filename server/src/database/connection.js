const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URI || 'mongodb://localhost:27017/';
const dbClient = new MongoClient(uri, { useNewUrlParser: true });

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

module.exports = dbConnection;
