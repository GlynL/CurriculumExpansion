const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(
  helmet.hsts({
    maxAge: 5184000 /* 60 days in seconds */
  })
);
// HSTS sets the 'Strict-Transport-Security' header
// This header tells the browser not to use the HTTP version of a site and to stay on the HTTPS version.
// This will last for the length of time specified in maxAge.
// HTTPS encrypts the data sent from server to browser adn vice-versa.
