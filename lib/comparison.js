'use strict';

var has = require('has-value');
var util = require('handlebars-utils');
var utils = require('./utils');
var helpers = module.exports;

helpers.gte = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a >= b, this, options);
};
