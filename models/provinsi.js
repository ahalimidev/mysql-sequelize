const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

/**
 * MEMBUAT MODEL PENGGUNA UNTUK TABEL PENGGUNA DI DATABASE
 * HARUS SESUAI DENGAN YANG ADA DI TABLE
 */
const provinsi = sequelize.define("provinsi", {
  id_provinsi: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
},
{ tableName: 'provinsi' });

module.exports = provinsi;