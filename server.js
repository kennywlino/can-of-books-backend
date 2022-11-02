'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postBooks = require('./modules/postBook.js');
const deleteBook = require('./modules/deleteBook.js');
const updateBook = require('./modules/updateBook.js');


const mongoose = require('mongoose');


// *** Mongoose Model

const Book = require('./models/book.js');

// *** Mongoose connection

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

// Middleware
const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Endpoints


app.get('/test', (request, response) => {
  
  response.send('test request received')
  
})

app.delete('/books/:bookID', deleteBook);

app.put('/books/:bookID', updateBook);

app.post('/books', postBooks);

app.get('/books', getBooks);

async function getBooks(request, response, next) {
  try {
    let results = await Book.find();

    response.status(200).send(results);
  } catch (error) {
    next(error)
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
