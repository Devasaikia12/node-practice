const clarkKent = {
  name: 'Clark Kent',
  secretIdentity: 'Superman',
  introduce: function () {
    return `Hi, my name is ${this.name}.`;
  },
  issuesReport: function () {
    return `${this.secretIdentity} saves the day!`;
  },
};

const myModule = (function () {
  let _name = 'Deva Saikia';

  const introduce = function () {
    return `Hi, my name is ${_name}.`;
  };

  const issuesReport = function () {
    return `${this.secretIdentity} saves the day!`;
  };

  return { introduce, issuesReport };
})();

console.log(myModule.introduce());
