let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./db/database');
   
    var MongoClient = require('mongodb').MongoClient


// Setting up express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Api root
const userRoute = require('./routes/clientRoutes.js')
app.use('/clientInformation', userRoute)

// mongo db--------
    mongoose.Promise = global.Promise
    const option = {
      socketTimeoutMS: 30000,
      keepAlive: true,
      reconnectTries: 30000,
      useNewUrlParser: true,
      poolSize: 5
    }
    
    var client
    mongoose.connect(dbConfig.db, option, function (err, client) {
      if (err) {
        console.log(err)
      }
      else {
        console.log('database connected')
        client = client
      }
    })


// Create port
const port = process.env.PORT || 8088;

// Conectting port
const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// // Index Route
// app.get('/', (req, res) => {
//     res.send('invaild endpoint');
// });

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// Static build location
app.use(express.static(path.join(__dirname, 'dist')));

