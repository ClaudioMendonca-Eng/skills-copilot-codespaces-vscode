// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

// The comments.html file should be served when you access http://localhost:3000 in your browser.

// The comments.html file should contain a form with a textarea and a submit button. The form should make a POST request to /comments when submitted.

// The server should listen for POST requests on /comments and log the content of the textarea to the console.

// The server should respond with a 200 status code and the following JSON object: { message: 'Data received' }.

// The server should listen on port 3000.

// The server should respond with a 404 status code when you make a GET request to /comments.

// The server should respond with a 404 status code when you make a POST request to /comments with a different Content-Type than application/x-www-form-urlencoded.

