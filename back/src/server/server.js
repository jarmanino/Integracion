
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const compression = require('compression');
const router = express.Router();
const morgan = require ('morgan')
const { PORT } = require('./config/global');
const {dbConnection}= require("../database/config");
const app = express();


require('dotenv').config();

dbConnection()


app.use(morgan('dev'));
app.use(express.json());
app.use(compression());
app.use(cors());
app.use('/api/Products', routes);






app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

module.exports = app; 

