import { RequestHandler } from "express";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express313' });
} as RequestHandler);

module.exports = router;
