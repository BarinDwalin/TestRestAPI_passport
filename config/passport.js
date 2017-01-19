var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
// load up the user model
var User = require('../app/models/user');
var config = require('../config/database'); // get db config file
 
module.exports = function(passport) {
  var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  //opts.jwtFromRequest = ExtractJwt.versionOneCompatibility({ tokenBodyField: 'MY_CUSTOM_BODY_FIELD' });
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    let user = User.find(p => p.id === jwt_payload.id);
   /* User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }*/
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      /*});*/
  }));
};