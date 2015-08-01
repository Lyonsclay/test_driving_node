chai = require 'chai'
expect = chai.expect
Funk = require '../../app/funk.js'

describe 'Funk', ->
  it 'is an object', ->
    expect(Funk()).to.be.an 'object'
   
  it 'has property start', ->
    expect(Funk()).to.have.property 'start'

    describe 'start', ->
      before (done) ->
        funk = Funk()

        funk.start(done)

      it 'set a property on Funk', ->
        expect(funk.good).to.eq 'goody'

