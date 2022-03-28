/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
  let objInstance; //private variable
  function create() {
    //private function to create methods and properties
    let _state = false;

    let start = function () {
      _state = true;
    };

    let stop = function () {
      _state = false;
    };

    let currentState = function () {
      return _state;
    };

    return {
      start: start,
      stop: stop,
      currentState: currentState,
    };
  }

  return {
    getInstance: function () {
      if (!objInstance) {
        objInstance = create();
      }

      return objInstance;
    },
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

obj1.start();

console.log(obj1.currentState());
console.log(obj2.currentState());
