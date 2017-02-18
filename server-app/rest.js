'use strict';

const router    = require('express').Router();
const restUtils = require('./rest-utils');

router.get('/rest/v1/book/:codeBook', function(req, res) {
  restUtils.responseSuccess(res, 'Connected!' + req.params.codeBook);
});

module.exports = router;