const lowercase = (req, res, next) => {
  req.body.full_name = req.body.full_name.toLowerCase();
  req.body.email = req.body.email.toLowerCase();
  req.body.username = req.body.username.toLowerCase();

  next();
};

module.exports = {
  lowercase,
};
