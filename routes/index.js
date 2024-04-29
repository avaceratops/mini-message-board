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

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  const { text, user } = req.body;

  if (text !== '' && user !== '') {
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
  } else {
    res.status(400).send('Name and message cannot be blank.');
  }
});

module.exports = router;
