const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {
    await Book.create({
        title: 'Phantom Toolbooth',
        description: 'The story follows a bored young boy named Milo who unexpectedly receives a magic tollbooth that transports him to the once prosperous, but now troubled, Kingdom of Wisdom.',
        status: true,
    });

    console.log('Phantom Toolbooth added');

    await Book.create({
        title: 'The Demon Haunted World',
        description: "How can we make intelligent decisions about our increasingly technology-driven lives if we don't understand the difference between the myths of pseudoscience and the testable hypotheses of science? Pulitzer Prize-winning author and distinguished astronomer Carl Sagan argues that scientific thinking is critical not only to the pursuit of truth but to the very well-being of our democratic institutions.",
        status: true,
    });

    console.log('The Demon Haunted World added');

    await Book.create({
        title: 'Bad Advice',
        description: "Science doesn't speak for itself. Neck-deep in work that can be messy and confounding and naïve in the ways of public communication, scientists are often unable to package their insights into the neat narratives that the public requires. Enter celebrities, advocates, lobbyists, and the funders behind them, who take advantage of scientists' reluctance to provide easy answers, flooding the media with misleading or incorrect claims about health risks.",
        status: false,
    })

    console.log('Bad Advice added');

    mongoose.disconnect();
}

seed();