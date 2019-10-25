module.exports = function(req, res, next) {
  req.database = {};
  next();
};
