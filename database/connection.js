const Sequelize = require("sequelize");

/**
 * MENGHUBUNGKAN DATABASE MYSQL DENGAN NODEJS MENGGUNAKAN SEQUELIZE
 */
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME, 
    process.env.DATABASE_PASSWORD, {
        host: process.env.DATABASE_HOST,
        //database yang digunakan
        dialect: "mysql",
        //port mysql
        port: 3306,
        loggings: false,
        define: {
            timestamps: false
    }
});

module.exports = sequelize;