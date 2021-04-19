const router = require("express").Router();
const provinsiCtrl = require("../controllers/provinsi");

router.get("/provinsi", provinsiCtrl.tampil);
router.get("/provinsi/:id_provinsi", provinsiCtrl.cari);
router.post("/provinsi", provinsiCtrl.simpan);
router.put("/provinsi/:id_provinsi", provinsiCtrl.edit);
router.delete("/provinsi/:id_provinsi", provinsiCtrl.hapus);

module.exports = router;
