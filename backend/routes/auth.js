const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const {
  register,
  login,
  updateUser,
} = require("../controllers/UserController");

router.post("/register", upload.single("avatar"), register);
router.post("/login", login);
router.put("/update/:id", upload.single("avatar"), updateUser);

module.exports = router;
