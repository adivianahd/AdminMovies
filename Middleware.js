const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");
const ProductService = require("./service/ProductService");
const db = require("./model/ProductModel")

const productService = new ProductService();
const formParams = { usernameField: "username", passwordField: "password" };

passport.use(
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, cb) => {
      console.log(username, password);
        
      db.users.findByUsername(username, (err, user) => {
        if (err) {
          return cb(err);
        }
        if (!user) {
          return cb(null, false);
        }
        if (user.password != password) {
          return cb(null, false);
        }
        return cb(null, user);
      });
    }
  )
);

findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};

/*async function strategy(username, password, cb){
  const user = await productService.findByUserName(username);
  if (user && user.password) {
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (isPasswordCorrect) {
      return cb(null, user);
    }

    return cb("La contraseña es incorrecta");
  }

  return cb("Usuario no existe");
}
*/
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});


//passport.use(new Strategy(formParams, strategy));


module.exports = passport;
