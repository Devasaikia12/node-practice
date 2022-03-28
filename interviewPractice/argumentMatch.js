// determine if fuction received the correct number of parms

let f = function (a, b) {
  if (arguments.length === f.length) {
    console.log('Numbers of parameters match');
  } else {
    console.log('Numbers of parameters not match');
  }
};

f(1);
f(1, 2);
f(1, 2, 3);
