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

// This helps protect your site from cross-site scripting (XSS).
// XSS is when someone injects malicious scripts into site.
// By enabling Content Security Policy you only allow content from the defined domains and if someone injects a malicious script the request will fail.
// By default we are only allowing scripts from our own domain. But we can add others.
// If you wanted to include Bootstrap, for example, you would add 'stackpath.bootstrapcdn.com' to the styleSrc array.
// For example:
// styleSrc: ["'self'", 'stackpath.bootstrapcdn.com']

// Another common use is Google analytics.
// Add the domain 'www.google-analytics.co' to `scriptSrc`
