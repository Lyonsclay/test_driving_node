var Funk = function () {
  var obj = {};

  obj.start = function (callback) {
    setTimeout(function () {
      setGood();
      callback();
    }, 9);
  };

  function setGood () {
    obj.good = 'goody';
  };

  return obj;
};

module.exports = Funk;
