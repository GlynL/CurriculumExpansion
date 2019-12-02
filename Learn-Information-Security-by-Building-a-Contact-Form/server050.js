const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
// Removes the 'X-Powered-By' header from requests.

// Next enable the `ieNoOpen` security feature.
