const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');
const getCollection = require('../../database/get-collection');
const { createUser } = require('../../database/auth-queries.js');

router.post('/login', async (req, res) => {
  try {
    const response = await mockResponseData.postLoginResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const [Users, db] = await getCollection({ collection: 'users' });
    await createUser(req.body, Users, db);
    res.send({ message: "successfully registered"});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
