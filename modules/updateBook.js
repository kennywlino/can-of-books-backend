const BookModel = require('../models/book');

async function updateBooks(request, response, next){
    try {
        let id = request.params.bookID;
        let data = request.body;

        const updatedBook = await BookModel.findByIdAndUpdate(id, data, { new: true, overwrite: true });

        response.status(200).send(updatedBook);

    } catch(error) {
        next(error);
    }
}

module.exports = updateBooks;