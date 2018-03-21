const express = require('express');
const users = require('./users');

const router = express.Router();

router.use('*', (req, res) => res.status(404).send('404'));
router.use('/users', users);
// All other routes here
//   Room data
//     chat history
//     decks
//     hands
//     etc

// default route?
//   Deliver homepage?

module.exports = router;
