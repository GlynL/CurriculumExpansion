const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

const helmetConfig = {};

app.use(helmet(helmetConfig));

// Lets add an additional feature to the configuration object which will disable client-side caching.
// Add a property to the configuration object which has a key of 'noCache' and a vlaue of 'false'.
