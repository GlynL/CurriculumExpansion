const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

const helmetConfig = {
  noCache: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"]
    }
  }
};

app.use(helmet(helmetConfig));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.sendFile());

// Next we need to add the path of our html file to the sendFile function.
// We can use the node.js variable `__dirname` to get the root of our directory and add '/index.html' to it
// Add this now.

// Now setup a post route at `/contact` which will listen for a message and `console.log` the message
// The message will included in the body of the request as 'message'
