const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");
const UserService = require("./service/UserService");
const userService = new UserService();

const formParams = { usernameField: "username", passwordField: "password" };

async function strategy(username, password, cb) {
  const user = await userService.findByUserName(username);
  if (user && user.password) {
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (isPasswordCorrect) {
      console.log("[Middleware]", "auth success");
      return cb(null, user);
    }

    console.log("[Middleware]", "password wrong");
    return cb("La contraseña es incorrecta");
  }

  console.log("[Middleware]", "user not found");
  return cb("Usuario no existe");
}


passport.use(new Strategy(formParams, strategy));
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

module.exports = passport;