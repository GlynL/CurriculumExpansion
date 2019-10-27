const express = require("express");
const app = express();
const helmet = require("helmet");

// Though it's just one layer of security, Helmet makes it easy to set your application's HTTP headers to smart, restrictive defaults to protect against common attacks.
// Helmet is a bundle of "middleware", or functions that can be used as an addition to Express.
// To load a middleware function in an Express app, call `app.use()`.

// DNS prefetching is when browsers perform domain name resolution of content such as links and images before being interacted with.
// It improves performance but has privacy issues.

// Disable DNS prefetching using the Helmet middleware function
// Pass `helmet.dnsPrefetchControl()` to `app.use()`
