const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
router
.get("/", userController.getAllUsers)
.get("/:id", userController.getUserDetail)
.post("/", userController.createUser)
.put("/:id", userController.updateUser);

exports.router = router;