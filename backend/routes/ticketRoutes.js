const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/create-ticket', ticketController.createTicket);

router.get('/get-all-tickets', ticketController.getTicketAll);

router.delete('/delete-ticket', ticketController.deleteTicket);

router.put('/update-ticket', ticketController.updateTicket);

module.exports = router