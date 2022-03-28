// Differences between dot notation and square bracket syntax

let sam = {
  castiel: 'mary',
  demo: {
    name: 'deva',
  },
};
let dean = {
  john: 'crowley',
  mary: 'chuck',
};

console.log(sam.castiel);
console.log(sam.demo);
console.log(sam['castiel']);
//which, if any, of these three log statements will work?
// console.log(dean[sam.castiel]); //den['mary'] => chuck //sam.castiel => mary
// console.log(dean.sam.castiel); // dean.undefined  // sam.castiel not present in dean object
// console.log(dean[sam['castiel']]); // dean[]
// console.log(dean[sam[castiel]]);
