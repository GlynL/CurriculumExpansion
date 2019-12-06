const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

const helmetConfig = {
  noCache: false
};

// noCache enables a middleware which sets multiple headers (Cache-Control, Surrogate-Control, Pragma, and Expires).
// It prevents caching on your site so that users are not getting old versions of your code once it is updated.
// If there was a security flaw in your code. This will stop users from getting the previous, flawed version.

app.use(helmet(helmetConfig));

// Enable one more feature by passing the key `contentSecurityPolicy` into the configuration object.
// The value of this key will be different.
// Pass the following object as a value.

//  {
//    directives: {
//      defaultSrc: ["'self'"],
//      scriptSrc: ["'self'"],
//      styleSrc: ["'self'"]
//    }
//  }
