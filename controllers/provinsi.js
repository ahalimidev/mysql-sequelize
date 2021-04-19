const provinsi = require("../models/provinsi");

//TAMPIL SEMUA DATA
const tampil = async(req, res, next) => {
    try {
        //findALL() = untuk nampilkan data semua
        await provinsi.findAll()
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
              //error = jika ada kesalahan pada proses tampil data, kemunukinan modelnya salah atau bisa dari pada parameter. tetap harus tau errornya kenapa.
            
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
         //jika ada error pada project
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

const cari = async(req, res, next) => {
    try {
        const id_provinsi = req.params.id_provinsi;
        //findALL() = untuk nampilkan data per satu yang berdasarkan where 
        await provinsi.findOne(
            {where : 
                {id_provinsi : id_provinsi}
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
               //error = jika ada kesalahan pada proses tampil data, kemunukinan modelnya salah atau bisa dari pada parameter. tetap harus tau errornya kenapa.
            return res.status(400).json({
                success: 0,
                message: error.message
            });
        });

    } catch (error) {
        //jika ada error pada project
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};


const simpan = async(req, res, next) => {
    try {
        const nama = req.body.nama;
        //create() = untuk simpan data berdasarkan kolom yang mau di simpan
        await provinsi.create({nama : nama})
        .then(result => {
            return res.status(201).json({
                success: 1,
                message: 'Tersimpan',
                data: result
            })
        }).catch(error => {
                   //error = jika ada kesalahan pada proses tampil data, kemunukinan modelnya salah atau bisa dari pada parameter. tetap harus tau errornya kenapa.
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
            //jika ada error pada project
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

const edit = async(req, res, next) => {
    try {
        const id_provinsi = req.params.id_provinsi;
        const nama = req.body.nama;
         //update() = untuk edit data berdasarkan data yang mau di ubah


        await provinsi.update({nama : nama}, {where : {id_provinsi : id_provinsi}})
        .then(result => {
          if(result == 1){
            return res.status(201).json({
                success: 1,
                message: 'Pembaruan data',
            })
          }else{
                    //error = jika ada kesalahan pada proses tampil data, kemunukinan modelnya salah atau bisa dari pada parameter. tetap harus tau errornya kenapa.
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
                    //jika ada error pada project

        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

const hapus = async(req, res, next) => {
    try {
        const id_provinsi = req.params.id_provinsi;
        //destroy() = untuk hapus data berdasarkan where di tuju
        await provinsi.destroy({where : {id_provinsi : id_provinsi}})
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
                //error = jika ada kesalahan pada proses tampil data, kemunukinan modelnya salah atau bisa dari pada parameter. tetap harus tau errornya kenapa.
            return res.status(400).json({
                success: 1,
                message: error.message
            });
        });
    } catch (error) {
            //jika ada error pada project
        return res.status(400).json({
            success : 0,
            message : error.message
        })
    }
};

module.exports = {
    tampil,simpan,edit,hapus,cari
}
