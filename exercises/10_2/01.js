const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase())
  }, 3000);
};

module.exports = uppercase;