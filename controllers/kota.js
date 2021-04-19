const kota = require("../models/kota");

const tampil = async(req, res, next) => {
    try {
        await kota.findAll()
        .then(result => {
            if(result !=null){
                return res.status(200).json({
                    success: 1,
                    result: result
                })
            }else{
                return res.status(400).json({
                    success: 1,
                    message: "Tidak ditemukan"
                })
            }
        }).catch(error => {
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

const cari = async(req, res, next) => {
    try {
        const id_kota = req.params.id_kota;
        await kota.findOne(
            {where : 
                {id_kota : id_kota}
            })
        .then(result => {
            if(result !=null){
                return res.status(200).json({
                    success: 1,
                    result: result
                })
            }else{
                return res.status(400).json({
                    success: 0,
                    message: "Tidak ditemukan"
                })
            }
        }).catch(error => {
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        });

    } catch (error) {
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};


const simpan = async(req, res, next) => {
    try {
        const id_provinsi = req.body.id_provinsi;
        const nama = req.body.nama;
        await kota.create({nama : nama,id_provinsi : id_provinsi})
        .then(result => {
            return res.status(201).json({
                success: 1,
                message: 'Tersimpan',
                data: result
            })
        }).catch(error => {
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

const edit = async(req, res, next) => {
    try {
        const id_kota = req.params.id_kota;
        const id_provinsi = req.body.id_provinsi;
        const nama = req.body.nama;
        await kota.update({nama : nama, id_provinsi : id_provinsi}, {where : {id_kota : id_kota}})
        .then(result => {
          if(result == 1){
            return res.status(201).json({
                success: 1,
                message: 'Pembaruan data',
            })
          }else{
            return res.status(400).json({
                success: 0,
                message: 'Tidak ada Pembaruan data',
            })
          }
        }).catch(error => {
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

const hapus = async(req, res, next) => {
    try {
        const id_kota = req.params.id_kota;
        await kota.destroy({where : {id_kota : id_kota}})
        .then(result => {
          if(result == 1){
            return res.status(201).json({
                success: 1,
                message: 'Data telah di hapus',
            })
          }else{
            return res.status(400).json({
                success: 0,
                message: 'tidak ada data di hapus',
            })
          }
        }).catch(error => {
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

module.exports = {
    tampil,simpan,edit,hapus,cari
}
