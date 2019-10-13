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
      console.log('db connection closed');
    });
  });
}

async function getUserByEmail(email) {
  const [Users, db] = await getCollection('users');
  return new Promise((resolve, reject) => {
    Users.findOne(
      { email },
      // Return only _id field
      { projection: { _id: 1 } },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        // Close Mongo client connection
        db.close();
        console.log('db connection closed');
      }
    );
  });
}

module.exports = {
  createUser,
  getUserByEmail
}