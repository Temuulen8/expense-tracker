const { Router } = require("express");

const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  getTransaction,
} = require("../controllers/record-controller");

const router = Router();

router.route("/").get(getAllRecord).post(createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord).get(getTransaction);

module.exports = router;
