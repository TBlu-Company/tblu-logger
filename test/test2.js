'use strict';
const log = require('../index');
describe('Principal 2', () => {
  it('Info', (done) => {
    log.info(__filename, 'info', 'test2 message', {obj: 1});
    log.info(__filename, 'info', 'test2 message', 'obj ', {obj: 1});
    log.info(__filename, 'info', 'test2 message %s', 'my string');
    log.info(__filename, 'info', 'test2 message %d', 123);
    log.info(__filename, 'info', 'test2 message %j', {number: 123}, {});
    log.info(__filename, 'info', 'test2 message %s, %s', 'first', 'second', {number: 123});
    log.info(__filename, 'info', 'test2 message', 'first', 'second', {number: 123});
    log.info(__filename, 'info', 'test2 message %s, %s', 'first', 'second', {number: 123}, function() {});
    log.info(__filename, 'info', 'test2 message', 'first', 'second', {number: 123}, function() { });
    done();
  });
  it('Error', (done) => {
    log.error(__filename, 'error', 'test2 message', new Error('test error'));
    log.error(__filename, 'error', 'test2 message', 'error', new Error('test error'));
    done();
  });
  it('Debug', (done) => {
    log.debug(__filename, 'debug', 'test2 message', {obj: 1});
    log.debug(__filename, 'debug', 'test2 message', 'obj', {obj: 1});
    done();
  });
});
