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
  it('should contain a login key', function(done) {
    getGithubRepo('bdfinlayson', function(repo){

      repo[0].owner.should.contain.keys('login');
      done();
    });
  });
});

describe('addRepoToGrid', function () {

  it('should add a repo to the page', function () {

    var repository = { login: 'bdfinlayson', name: 'awesome-weather-app' };
      $('.col-1-1').length.should.equal(0);
      addRepoToGrid(repository);
      $('.col-1-1').length.should.equal(1);
  });
  it('should add another repository to the page', function () {
    var repository = { login: 'bdfinlayson', name: 'awesome-weather-app' };
    var $col = addRepoToGrid(repository);

    $('body').find('div.col-1-1').length.should.equal(2);
  });
  it('should display the login text', function() {
    var repository = { login: 'bdfinlayson', name: 'awesome-weather-app' };
    var $col = addRepoToGrid(repository);
    expect($col).to.contain('bdfinlayson');
  });
});

describe('get username', function() {
  it('should get a username from the user', function() {
    var username = 'bdfinlayson';
    var userInput = $('<input type="text" class="input" value="bdfinlayson"></input>');
    $('body').append(userInput);
    $('.input').innerHTML = username;
    var response = $('.input').val();

    //var repo = getGithubRepo();
    expect(response).to.be.an('string');
  });
});

