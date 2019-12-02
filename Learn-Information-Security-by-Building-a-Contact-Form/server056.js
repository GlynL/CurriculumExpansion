const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
// Sets the 'X-XSS-Proection' header to prevent reflected XSS attacks.
// Reflected XSS attacks inject a script tag into the query string of a url which by visiting the url runs the JavaScript in the script tag.

// Next enable the `frameguard` security feature.
