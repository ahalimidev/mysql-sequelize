const router = require("express").Router();

router.use(require("./provinsi"));
router.use(require("./kota"));

module.exports = router;

