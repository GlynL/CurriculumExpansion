const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet.dnsPrefetchControl());
// Sets header "X-DNS-Prefetch-Control: off"

// A header `X-Powered-By` is sent with every request, identifying the technology used on the server (e.g. Express).
// This can make it easier for hackers to target vulnerabilities on your server

// Remove this header from being transmitted using the Helmet middleware `hidePoweredBy`
