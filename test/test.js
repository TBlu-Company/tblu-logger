'use strict';
const path = require('path');
const dirname = path.dirname(__filename);
const log = require('../index');
describe('Principal', () => {
  it('Inicializar', (done) => {
    log.initialize(dirname, 'debug');
    done();
  });
  it('Info', (done) => {
    log.info(__filename, 'info', 'test message', {obj: 1});
    log.info(__filename, 'info', 'test message', 'obj ', {obj: 1});
    log.info(__filename, 'info', 'test message %s', 'my string');
    log.info(__filename, 'info', 'test message %d', 123);
    log.info(__filename, 'info', 'test message %j', {number: 123}, {});
    log.info(__filename, 'info', 'test message %s, %s', 'first', 'second', {number: 123});
    log.info(__filename, 'info', 'test message', 'first', 'second', {number: 123});
    log.info(__filename, 'info', 'test message %s, %s', 'first', 'second', {number: 123}, function() {});
    log.info(__filename, 'info', 'test message', 'first', 'second', {number: 123}, function() { });
    done();
  });
  it('Error', (done) => {
    log.error(__filename, 'error', 'test message', new Error('test error'));
    log.error(__filename, 'error', 'test message', 'error', new Error('test error'));
    done();
  });
  it('Debug', (done) => {
    log.debug(__filename, 'debug', 'test message', {obj: 1});
    log.debug(__filename, 'debug', 'test message', 'obj', {obj: 1});
    done();
  });
});
