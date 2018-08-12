var express = require('express');
const router = express.Router()


router.get('/', (req, res) => res.json({
  msg: "Posts working!"
}))

module.exports = router
