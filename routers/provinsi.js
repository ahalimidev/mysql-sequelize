const router = require("express").Router();
const kotaCtrl = require("../controllers/kota");

router.get("/kota", kotaCtrl.tampil);
router.get("/kota/:id_kota", kotaCtrl.cari);
router.post("/kota", kotaCtrl.simpan);
router.put("/kota/:id_kota", kotaCtrl.edit);
router.delete("/kota/:id_kota", kotaCtrl.hapus);

module.exports = router;
