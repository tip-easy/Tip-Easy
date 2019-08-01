require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ "message": "Server's alive!"});
})

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => 
  console.log(`\n** Running on port ${PORT} **\n`)
);
