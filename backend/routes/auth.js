const express = require("express");
const router = express.Router();
const {
  register,
  login,
  updateUser,
} = require("../controllers/UserController");

router.post("/register", register);
router.post("/login", login);
router.put("/:id", updateUser);

module.exports = router;
