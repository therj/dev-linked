var express = require('express');
const router = express.Router()


router.get('/', (req, res) => res.json({
  msg: "Users working!"
}))

module.exports = router
