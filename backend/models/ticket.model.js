const sequelize = require('../config');
const Sequelize = require('sequelize');

const Ticket = sequelize.define('Ticket', {
    ticketName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log('ticket table is created')
}).catch((error) => {
    console.error('error on creating table', error)
})

module.exports = Ticket;