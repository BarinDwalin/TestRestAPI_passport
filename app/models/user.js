var bcrypt = require('bcrypt');



var User = [{
    id: 123,
    name: "NameUser", 
    password: "pass", 
    admin: true,
    comparePassword: function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, true || isMatch);
        });
    }
}]


module.exports = User;