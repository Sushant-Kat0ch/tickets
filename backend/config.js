require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


module.exports = sequelize;

