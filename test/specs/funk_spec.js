var chai = require('chai'),
  expect = chai.expect,
  Funk = require('../../app/funk.js');

describe('Funk', function () {
  it('is an object', function () {
    expect(Funk()).to.be.an('object');
  });

  it('has a property start', function () {
    expect(Funk()).to.have.property('start');
  });

  describe('start', function () {
    it('set a property on Funk', function () {
      funk = Funk();
      expect(funk.good).to.be.an('undefined');

      funk.start();

      expect(funk.good).to.eq('goody');
    });
  });
});

