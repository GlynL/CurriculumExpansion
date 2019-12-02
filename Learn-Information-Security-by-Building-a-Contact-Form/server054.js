const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
// Sets 'X-Content-Type-Options' header to 'nosniff'.
// Helps prevent browsers guessing the MIME type.
// This prevents the browser from executing a JavaScript file which is incorrectly marked as another type, such as HTML.

// Next enable the `xssFilter` security feature.
