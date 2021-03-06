const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

// DB Config
const db = require('./config/keys').mongoURI

// Create App
const app = express()

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello"))

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server runniing on port ${port}`))
