const getCollection = require('./get-collection');

async function createUser(userObj) {
  const [Users, db] = await getCollection('users');
  return new Promise((resolve, reject) => {
    Users.insertOne(userObj, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
      // Close Mongo client connection
      db.close();
    });
  });
}

module.exports = {
  createUser
}