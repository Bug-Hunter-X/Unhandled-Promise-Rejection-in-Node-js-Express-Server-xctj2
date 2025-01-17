# Unhandled Promise Rejection in Node.js Express Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The `bug.js` file shows an Express.js server with an asynchronous operation that might throw an error. Because the error isn't handled properly, it leads to an unhandled promise rejection.

The `bugSolution.js` file shows the corrected version, demonstrating proper error handling using `try...catch` blocks or `.catch()` on promises.