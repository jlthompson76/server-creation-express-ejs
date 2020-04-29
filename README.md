### Server Creation with Express and EJS

Create a Node.js server that includes Express and EJS. Use the Unit 19 - Day 2 slides if you need help starting a Node project.

The app must include the following:

* a package.json file that includes the information about your app
* an index.js file as your entry point into the app
* a views folder that includes the following:
    * an index file
    * an about file

In your index.js file(entry point), it must include the following:

* import express and ejs
* configure your app to have the view engine use EJS
* build your server so that it is running on port 8000
* have a callback that will send a message to your console saying, "Server is running on port 8000"
    * BONUS: How can you send this message without hardcoding 8000?
* Create 2 routes:
    * If the request is to get  '/', the response should load the index.ejs file. The index.ejs file should have an h1 tag that says, "Mom! Look what I can do!"
    * If the request is to get  '/about', the response should load the about.ejs file. The about.ejs file should have a p tag that pulls a string from the route. This string should state, "... I can build a web application with Node.js and Express!"
