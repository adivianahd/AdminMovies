const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");
const UserController = require("./controllers/UserController")
const UserService = require("./service/UserService");
const userService= new UserController(new UserService());

const formParams = { usernameField: "username", passwordField: "password" };

async function strategy(username, password, cb) {
  const user = await userService.findByUserName(username);
  if (user && user.password) {
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (isPasswordCorrect) {
      return cb(null, user);
    }

    return cb("La contraseña es incorrecta");
  }

  return cb("Usuario no existe");
}


passport.use(new Strategy(formParams, strategy));
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

module.exports = passport;