const { Router } = require("express");
const { signUp, signIn } = require("../controllers/auth-controller");

const router = Router();

router.route("/signup").post(signUp);
router.route("/signup").post(signIn);
module.exports = router;