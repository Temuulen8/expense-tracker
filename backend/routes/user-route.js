const { Router } = require("express");

const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  currentUser,
} = require("../controllers/user-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/profile").get(auth, currentUser);
router.route("/").get(getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
