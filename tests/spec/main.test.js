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

describe('getGithubRepo', function() {
  it('should return a repository object', function (done) {
    getGithubRepo('bdfinlayson', function(repo){
      repo[0].owner.login.should.equal('bdfinlayson');
      done();
    });
  });
  it('should return another repository object', function (done) {
    getGithubRepo('sscotth', function(repo){
    repo[0].owner.login.should.equal('sscotth');
    done();
    });
  })
});


