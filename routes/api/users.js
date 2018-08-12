const express = require('express');
const router = express.Router()
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const saltRounds = 10
// Load User model
const User = require('../../models/User');
// @route   GET api/users/test 
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => res.json({
  msg: "users working!"
}))


// @route   GET api/users/register 
// @desc    Register user
// @access  Public

router.post('/register', (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: "Email already exists"
        })
      } else {
        const avatar = gravatar.url(req.body.email, {
          size: '200',
          rating: 'pg',
          default: 'robohash'
        }, true);


        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,
        })

        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            // Store hash in your password DB.
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });



      }
    })
})
module.exports = router
