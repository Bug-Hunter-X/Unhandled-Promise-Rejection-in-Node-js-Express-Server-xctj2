const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This line might throw an error if something goes wrong
    const result = someExternalFunctionThatMightFail();
    res.send(result);
  }, 100);
});

function someExternalFunctionThatMightFail() {
  // Simulate a potential error (e.g., network request failure)
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success!';
}