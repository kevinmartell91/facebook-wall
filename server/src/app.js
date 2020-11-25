const express = require('express');
const bodyParser = require('body-parser');
const stage = require ('../src/config/config.env');
const morgan = require ('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
// const connection = require ('../src/config/database')(mongoose);
const app = express();


mongoose.connect("mongodb://admin:o0I9u8Y7@ds025742.mlab.com:25742/laboratoriabd",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false,
    useFindAndModify: false,
}).then ( () => console.log("DB connection perfectly done ") )
  .catch((error) => console.log("DB connection fail", error.message) );

  // mongoose.set('useFindAndModify', false);


// settings

//middleware 
if(stage.environment !== 'production') {
  app.use(morgan('dev'));
  // app.use(logger('dev'));
}
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// routes

app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/auth', authRoutes);

// static files

app.get('/', (req, res) => {
  res.send('Hello there to my facebook wall challenge');
});

// error hadler

app.listen(`${stage.port}`, () => {
  console.log(`API running on localhost:${stage.port}`);
})