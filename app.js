const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotEnv = require('dotenv').config();
const session = require('express-session');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')
const { connectSrcUrls, scriptSrcUrls, styleSrcUrls, fontSrcUrls } = require('./whitelist')
//const dbUrl =  'mongodb://127.0.0.1:27017/soulnotes'
const dbUrl = `mongodb+srv://nic853nh:${process.env.ATLAS_LOGIN}@soulnotes.notpmyl.mongodb.net/?retryWrites=true&w=majority` || 'mongodb://127.0.0.1:27017/soulnotes'
//set up local mongoose store
//variables for set up
const secret = '4684a58s4d78f54g1h2ddd58h'
const port = 3000



mongoose.connect(dbUrl)
  .then(() => {
    console.log('database Connected')
  })
  .catch(err => {
    console.log('Mongo connection error')
    console.log(err)
  })

// to parse objects
app.use(express.urlencoded({ extended: true }));

//security
app.use(mongoSanitize());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", "blob:"],
      objectSrc: [],
      imgSrc: [
        "'self'",
        "blob:",
        "data:",
        "https://res.cloudinary.com/djj2nhj8d/",
        "https://images.unsplash.com/"
      ],
      fontSrc: ["'self'", ...fontSrcUrls],
      mediaSrc: ["https://res.cloudinary.com/dv5vm4sqh/"],
      childSrc: ["blob:"]
    }
  })
);


//config up sessions
const sessionConfig = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure:true,
    expires: Date.now() + 604800000,
    maxAge: 604800000
  }
}

app.use(session(sessionConfig));
app.use(methodOverride('_method'))

//set view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//to use css and js
app.use(express.static(__dirname + '/public'));


///routes
const routes = require('./routes/routes')
const products = require('./routes/products');
app.use('/', routes)
app.use('/products', products)



// set up express
app.listen(port, () => { console.log(` Serving on ${port}. Press ctl + c to exit`) })