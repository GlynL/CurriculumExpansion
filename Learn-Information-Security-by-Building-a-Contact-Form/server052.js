const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
// `ieNoOpen` sets the'X-Download-Options' to prevent IE from downloading.
// This prevents old versions of Internet Explored from allowing malicious HTML downloads from your site.

// Next enable the `noSniff` security feature.
