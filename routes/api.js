const express = require("express");
const SignUpController = require("../controllers/auth/SignUpController");
const SignInController = require("../controllers/auth/SignInController");
const UserController = require("../controllers/UserController");
const SignOutController = require("../controllers/auth/SignOutController");
const CategoryController = require("../controllers/CategoryController");
const checkAuth = require("../middlewares/auth");
// appication bool true false , 
// default false, 
// put update ----- true , notification -- message, time -- post 

const APIROUTER = express.Router();

// auth requests
APIROUTER.post("/sign-up", SignUpController.registerUser);
APIROUTER.post("/category", CategoryController.addCategory);
APIROUTER.post("/sign-in", SignInController.signIn);
APIROUTER.get("/users/all", UserController.getAllUser);
APIROUTER.post("/sign-out", checkAuth, SignOutController.signOut);
APIROUTER.post("/sign-out-all", checkAuth, SignOutController.signOutAll);
APIROUTER.get("/users/current/:id", checkAuth, UserController.getCurrentUser);


APIROUTER.put(
  "/users/upload-display-picture",
  checkAuth,
  UserController.uploadDisplayPicture
);

module.exports = APIROUTER;
