require('dotenv').config();

const express = require('express');
const cors = require('cors')
const helmet = require('helmet');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
  res.status(200).json({ "message": "Server's alive!"})
})

const port = process.env.PORT || 7000;

server.listen(port, () => console.log(
  `\n** Running on port ${port} **\n`
));
