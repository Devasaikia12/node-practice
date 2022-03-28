function f1(a) {
  let b = 2;
  setTimeout(function () {
    console.log(a, b);
  }, 10);
}

function f2() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(
      function (x) {
        console.log(x);
      }.bind(this, i),
      1000 * i
    );
  }
}

function f3() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(
      (function (x) {
        return function () {
          console.log(x);
        };
      })(i),
      1000 * i
    );
  }
}

f1(1);
f3();
