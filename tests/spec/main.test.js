/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function() {
  it('should assert true', function() {
    true.should.be.true;
    false.should.be.false;
  });
});


describe('hello', function() {

  it('should return world', function () {
    hello().should.equal('world');

  })
})
