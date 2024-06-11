const express    = require('express');
let cors         = require('cors');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes')

const port = 3000;
const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use('/api/tickets', ticketRoutes)

app.listen(port, () => {
    console.log('app running');
})

app.get('/api/data', (req, res) =>{
    const data = { message: 'hello from', name:'skatxer'}
    res.send(data);
})