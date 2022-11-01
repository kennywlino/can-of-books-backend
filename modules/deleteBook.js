const express = require('express');
const BookModel = require('../models/book');

async function deleteBook(request, response, next) {
  try {
    let id = request.params.bookID;
    await BookModel.findByIdAndDelete(id);
    response.status(200).send('Book was deleted.');
  } catch (error) {
    next(error);
  }
}


module.exports = deleteBook;