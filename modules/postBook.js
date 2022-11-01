const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const BookModel = require('../models/book');

mongoose.connect(process.env.DB_URL);

async function postBooks(request, response, next){
  try{
    console.log(request.body);
    let createdBook = await BookModel.create(request.body);
    response.status(200).send(createdBook);
  } catch (error) {
    next(error) 
  }
}

module.exports = postBooks;