function hello() {

  return 'world';
}

function getGithubRepo(userLogin, cb) {

  var urlBase = 'https://api.github.com/users/';
  var userLogin;
  var urlEnd = '/repos';
  var url = urlBase + userLogin + urlEnd;

  $.get(url, function(repo) {
    return cb(repo)
  });
};




