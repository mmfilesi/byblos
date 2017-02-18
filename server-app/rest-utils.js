'use strict';

const restUtils = (function() {

  const module    = {};
  const self      = module;

  module.responseSuccess = (res, msg)=> {
    res.status(200).json(msg);
  };

  module.responseFile = (fileToDownload)=> {
    res.status(200).json(msg);
  };

  return {
    responseSuccess: module.responseSuccess
  };

})();

module.exports = restUtils;
