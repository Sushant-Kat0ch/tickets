const { json } = require('body-parser');
const Ticket   = require('../models/ticket.model');
const {Op, where}   = require('sequelize')

exports.createTicket = async(req, res) => {
    const { ticketName, date } = req.body
    try {
        const ticket = await Ticket.create({ticketName, date });
        res.status(201).json({message: 'ticket Created successfully ', ticket})
    }
    catch(err) {
        console.error(err);
        res.status(500).json({message: 'server error'})
    }
}
exports.updateTicket = async(req, res) => {
    const { ticketName, date, id } = req.body
    try {
        const ticket = await Ticket.update( { ticketName: ticketName, date: date },  {where :{id : id }});
        res.status(201).json({message: 'ticket updated successfully ', ticket})
    }
    catch(err) {
        console.error(err);
        res.status(500).json({message: 'server error'})
    }
}


exports.getTicketAll = async(req, res) => {

    let ticketQuery = req.query
    ticketQuery = JSON.stringify(ticketQuery) == '{}' ? null : ticketQuery
    try { 
        if(ticketQuery ){
            const startDate = new Date(ticketQuery.startDate);
            const endDate = new Date(ticketQuery.endDate); 
            const ticket = await Ticket.findAll({
                where: {
                    date: {
                      [Op.between]: [startDate, endDate]
                    }
                  }
            });
            return res.status(200).json({message: 'ticket found successfully ', ticket})
        }
        else{
            const ticket = await Ticket.findAll();
            return res.status(200).json({message: 'ticket found successfully ', ticket})
        }
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteTicket = async(req, res) => {
    const { id }= req.query

    try{
        const ticket = await Ticket.findOne({where: {id : id}})
        if(!ticket){
            res.status(404).json({message:'ticket not found', ticket})
        }
        ticketDelete = await Ticket.destroy({where: {id: id}})
        if(ticketDelete){
            res.status(200).json({message:'ticket deleted successfully'})
        }
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'server error'})
    }
}


