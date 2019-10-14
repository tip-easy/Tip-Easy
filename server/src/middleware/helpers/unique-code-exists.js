const getCollection = require('../../database/get-collection');

async function uniqueCodeExistsOnDB(code) {
  const res = await findUniqueCode(code);
  return res ? true : false;
}

// One-time-use DB Helper
async function findUniqueCode(code) {
  const [Users, db] = await getCollection('users');
  return new Promise((resolve, reject) => {
    Users.findOne(
      { unique_code: code },
      // Return only unique_code field
      { projection: { unique_code: 1 } },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log(result);
          resolve(result);
        }
        // Close Mongo client connection
        db.close();
        console.log('db connection closed');
      }
    );
  });
}


module.exports = uniqueCodeExistsOnDB;