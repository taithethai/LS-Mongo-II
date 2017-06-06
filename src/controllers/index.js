module.exports = (app) => {
  require('./user')(app);
  require('./blog')(app);
};