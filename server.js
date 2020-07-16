//Packages
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/api');
const cors = require('cors')
const helmet = require('helmet')

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;
app.use(helmet())
app.use(cors())

 
//Enforce SSL
// app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.use(express.json());
app.use(express.urlencoded({extended:false})) //True for nested objects
 

//HTTP request logger
app.use(morgan("tiny"));
app.use('/api',routes);
app.use('/',routes);

//Step 3
if(process.env.NODE_ENV === "production"){
          app.set('trust proxy', 1);
          session.cookie.secure = true;

    app.use(express.static('Client/build'));
}


app.listen(PORT, console.log('Server is starting at ' + PORT))
