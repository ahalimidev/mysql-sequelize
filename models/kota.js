const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

/**
 * MEMBUAT MODEL PENGGUNA UNTUK TABEL PENGGUNA DI DATABASE
 * HARUS SESUAI DENGAN YANG ADA DI TABLE
 */
const kota = sequelize.define("kota", {
  id_kota: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_provinsi : {
    type : Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
},
{ tableName: 'kota' });

module.exports = kota;