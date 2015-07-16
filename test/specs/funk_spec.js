var chai = require('chai'),
  expect = chai.expect,
  Funk = require('../../app/funk.js');

describe('Funk', function () {
  it('is an object', function () {
    expect(Funk()).to.have.property('start');
  });
});

