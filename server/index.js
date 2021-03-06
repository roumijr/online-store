const express = require('express');
const path = require('path');
const cors = require('cors');
const fileupload = require('express-fileupload')
require('dotenv').config();

const sequelize = require('./db');
const models = require('./models/models.js');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErorrHandlingMiddleware');



const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router);
app.use(fileupload({}));
//middleware должен быть последним в списке 
app.use(errorHandler);


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () =>
            console.log(`server started on port:${PORT}`));
        
    } catch (e) {
        console.log(e)
    }
}

start()