const express = require('express');
const mongoose = require('mongoose');

const app = express();
const authRouted = require('./routes/authRoute')

// middleware
app.use(express.static('public'));

app.use(express.json())
// view engine
app.set('view engine', 'ejs');

// database connection
const port = process.env.PORT || '3003'
 const endpoints = '0.114'
const dbURI = 'mongodb+srv://muhammadasaad561:cnm8Anxy1DIE2tk5@cluster0.ghcqs4c.mongodb.net/mydbs?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {
    console.log("Asad");
   
app.listen(port, `192.168.${endpoints}`, () => console.log(`Server listening  at http://192.168.${endpoints}:${port}`))})
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRouted);