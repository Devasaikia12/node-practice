/**
 * Create an example of a callback function with multiple parameters
 * and then show it being used
 */

let cb = (fn1, fn2, obj) => {
  setTimeout(() => {
    if (obj.isGood) {
      fn1(obj.name);
    } else {
      fn2(obj.name);
    }
  }, 1000);
};

let ftw = function (name) {
  console.log('Depending on the season,', name, 'is a good guy');
};
let wtf = function (name) {
  console.warn('Depending on the season,', name, 'is a bad guy');
};
let app = (function () {
  const castiel = { name: 'Castiel', isGood: true };
  const crowley = { name: 'Crowley', isGood: false };
  //use callback function here

  cb(ftw, wtf, castiel);
  cb(ftw, wtf, crowley);
})();
