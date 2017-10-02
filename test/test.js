'use strict';
const path = require('path');
const dirname = path.dirname(__filename);
const log = require('../index');
describe('Principal', () => {
  // it('Info', (done) => {
  //   log.info(__filename, 'info', 'test message', {obj: 1});
  //   log.info(__filename, 'info', 'test message', 'obj ', {obj: 1});
  //   log.info(__filename, 'info', 'test message %s', 'my string');
  //   log.info(__filename, 'info', 'test message %d', 123);
  //   log.info(__filename, 'info', 'test message %j', {number: 123}, {});
  //   log.info(__filename, 'info', 'test message %s, %s', 'first', 'second', {number: 123});
  //   log.info(__filename, 'info', 'test message', 'first', 'second', {number: 123});
  //   log.info(__filename, 'info', 'test message %s, %s', 'first', 'second', {number: 123}, function() {});
  //   log.info(__filename, 'info', 'test message', 'first', 'second', {number: 123}, function() { });
  //   done();
  // });
  it('Error', (done) => {
    log.error(__filename, 'error', 'test message', 'error', new Error('test error'));
    log.error(__filename, 'error', 'test message', 'error', new Error('test error'));
    // log.error(__filename, 'error', 'test message', 'error', 'error', 'error', 'error', {obj: 1, a: { x: [{a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}] }}, {obj: 1, a: { x: [{a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}] }}, {number: 123}, new Error('test error'));
    // log.error(__filename, 'error', 'test message', 'erro1: %j, erro2: %j, erro3: %j, ',
    //   {obj: 1, a: { x: [{a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}] }},
    //   {obj: 1, a: { x: [{a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}] }}, {number: 123}, new Error('test error'));
    try {
      throw new TypeError('ola');
    } catch (err) {
      log.error(__filename, 'error', 'test message', 'TypeError', err);
    }
    done();
  });
  it('Inicializar', (done) => {
    log.initialize(dirname, 'debug');
    done();
  });
  // it('Debug', (done) => {
  //   log.debug(__filename, 'debug', 'test message', {obj: 1});
  //   log.debug(__filename, 'debug', 'test message', 'obj', {obj: 1});
  //   done();
  // });
});
