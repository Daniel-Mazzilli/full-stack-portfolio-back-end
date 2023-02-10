const bcrypt = require("bcrypt");

const hashPass = (req, res, next) => {
  bcrypt.genSalt().then((salt) => {
    bcrypt
      .hash(req.body.password, salt)
      .then((hash) => {
        req.body.password = hash;
      })
      .then(() => next());
  });
};

module.exports = {
  hashPass,
};
