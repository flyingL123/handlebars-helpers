'use strict';

var isNumber = require('is-number');
var util = require('handlebars-utils');
var utils = require('./utils');
var helpers = module.exports;

helpers.split = function(str, ch) {
  if (!util.isString(str)) return '';
  if (!util.isString(ch)) ch = ',';
  return str.split(ch);
};
