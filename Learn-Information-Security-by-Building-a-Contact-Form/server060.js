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
// Control who can insert iframes into page.
// Sets "X-Frame-Options: SAMEORIGIN" by default.

// You can also configure the settings when enabling features.
// Enable `hsts` but pass an object into the function `{ maxAge: 5184000}`
