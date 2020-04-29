// Import the Express module

const express = require('express');
const app = express();

// Configure your app to have the view engine use EJS

app.set('view engine', 'ejs');

// Build your server so that it is running on port 8000

const PORT = 8000;

// Have a callback that will send a message to your console saying, "Server is running on port 8000"

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Create 2 routes:
// * If the request is to get '/', the response should load the index.ejs file. The index.ejs file should have an h1 tag that says, "Mom! Look what I can do!"

app.get('/', (request, response) => {
    let heading = "Mom! Look what I can do!";
    response.render('index', {
        quote: heading
    });
});

// * If the request is to get '/about', the response should load the about.ejs file. The about.ejs file should have a p tag that pulls a string from the route. This string should state, "... I can build a web application with Node.js and Express!"

app.get('/about', (request, response) => {
    let string = 'I can build a web application with Node.js and Express!';
    response.render('about', {
        quote: string
    });
});
