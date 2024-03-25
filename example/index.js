const isRemote = require("../lib");

console.log(isRemote("path/to/some/file"));
// false

console.log(isRemote("file://path/to/some/file"));
// false

console.log(isRemote("http://ionicabizau.net"));
// true

console.log(isRemote("git@github.com:IonicaBizau/url-local.git"));
// true

console.log(isRemote(42));
// false

console.log(isRemote("C:\\Users\\IonicaBizau\\Desktop\\file.txt"));
// false
