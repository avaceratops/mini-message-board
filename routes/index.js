const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hello World!',
    user: 'Enki',
    added: new Date(),
  },
  {
    text: "I'm silly",
    user: 'Apollo',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
