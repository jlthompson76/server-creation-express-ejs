// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// This is the function that is triggered each time our server receives a request from the client
// It must have 2 parameters:
  // REQUEST = incoming request from the client that goes to the server
  // RESPONSE = outgoing response that our server will send back to the client
// This is an example of a route. The route is set with an endpoint of '/'. Once the endpoint has been requested, the response will send something back. 
//(In this example, its a message of "Welcome to Express!")
app.get('/', function(request, response) {
  // TESTING ONLY - This will console log into the terminal what the client has entered as an endpoint.
  const url_requested = request.url;
  console.log(`URL Requested: ${url_requested}`);

  // What will be sent back to the client if this endpoint was requested
  response.send('Welcome to Express!');
});

// Start the app's server by listening to port 3000
app.listen(3000, function() {
  console.log('Express app started');
});
