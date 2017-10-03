'use strict';
const winston = require('winston');
const fs = require('fs');
let l;

module.exports.initialize = function (dirname, level) {
  if (!level) {
    level = 'debug';
  }
  if (!dirname) {
    throw new Error('Cant initialize log, dirname is require');
  }
  let logDir = dirname + '/log';
  fs.mkdir(logDir, (err) => {
    if (err && err.errno !== -17) {
      console.log(err);
      throw new Error('Cant create log dir: ' + logDir);
    } else {
      l = new (winston.Logger)({
        level: level,
        exitOnError: false,
        transports: [
          new (winston.transports.File)({
            name: 'debug-file',
            filename: logDir + '/filelog-debug-cli.log',
            level: 'debug',
            json: false,
            colorize: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            prettyPrint: true
            // timestamp: function() {
            //   return new Date().toISOString();
            // },
            // formatter: function(options) {
            //   // Return string will be passed to logger.
            //   let s = '';
            //   s += options.timestamp();
            //   s += ' [' + options.level.toUpperCase() + ']';
            //   s += ' ' + options.meta.filename + '';
            //   s += ' - ' + options.meta.metodo;
            //   s += ' - ' + options.meta.mensagem;
            //   s += testObj(options.meta.mensagem2);
            //   s += testObj(options.meta.objeto);
            //   return s;
            // }
          }),
          new (winston.transports.File)({
            name: 'error-file',
            filename: logDir + '/filelog-error-cli.log',
            level: 'error',
            json: false,
            colorize: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            prettyPrint: true
          })
          // new (winston.transports.File)({
          //   name: 'info-file-json',
          //   filename: dirname + '/log/filelog-info-json.log',
          //   level: 'info',
          //   json: true
          // }),
          // new (winston.transports.File)({
          //   name: 'error-file',
          //   filename: dirname + '/log/filelog-error.log',
          //   level: 'error',
          //   json: false
          // })
        ]
      });
    }
  });
};

function log(level, args) {
  let clone = args.slice();
  let message = '[' + clone[0] + '] ' + '[' + clone[1] + ']' + ' - ' + clone[2];
  clone.splice(0, 3);
  let x = [level, message];
  x = x.concat(clone);
  if (l) {
    l.log.apply(l, x);
  } else {
    console.log('Esperando o log');
    setTimeout(function() { log(level, args); }, 300);
  }
}
module.exports.info = function () {
  let argumentsArray = Array.prototype.slice.apply(arguments);
  log('info', argumentsArray);
};

module.exports.error = function () {
  let argumentsArray = Array.prototype.slice.apply(arguments);
  log('error', argumentsArray);
};
module.exports.debug = function () {
  let argumentsArray = Array.prototype.slice.apply(arguments);
  log('debug', argumentsArray);
};
