var Funk = function () {
  var obj = {};

  obj.start = function (callback) {
    setTimeout(function () {
      setGood();
      callback();
    }, 9);
  };

  setGood = function () {
    obj.good = 'goody';
  };

  return obj;
};

module.exports = Funk;
