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


function addRepoToGrid(repository) {

  var $col = ('<div class="col-1-1">' + repository.name + " " + repository.login + '</div>');


  $('div.grid').append($col);

  return $col;

}




