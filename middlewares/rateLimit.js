const rateLimit = require('express-rate-limit');

const apiLimit = rateLimit({
  windowMs: 1440 * 60 * 1000,
  max: 1,
  message: 'Only one message can be submitted :)',
});

module.exports = apiLimit;
