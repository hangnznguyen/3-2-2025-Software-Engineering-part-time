const express = require('express');
const router = express.Router();



// new route for adding two numbers
router.get('/Add', (req, res) => {


res.send(req.query)
})
module.exports = router;