function createUser(userObj, collection, db) {
  return new Promise((resolve, reject) => {
    collection.insertOne(userObj, (err, result) => {
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