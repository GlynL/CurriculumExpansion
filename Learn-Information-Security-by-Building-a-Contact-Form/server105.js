const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

const helmetConfig = {
  noCache: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "www.google-analytics.com"],
      styleSrc: ["'self'", "stackpath.bootstrapcdn.com"]
    }
  }
};

app.use(helmet(helmetConfig));

// Now we have helmet all set up and our site is much more secure.

// Our server is going to be receiving a post request from a form on the front-end.
// Configure the server to use `express.urlencoded` passing an object with the key 'extended' and value 'false'
