'use strict';

// Vercel catch-all API function. Express continues to handle the existing /api/* routes.
const { app } = require('../server');

module.exports = function handler(req, res) {
  return app(req, res);
};
