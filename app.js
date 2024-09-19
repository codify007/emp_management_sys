require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');



// npm install connect-flash
const flash = require('connect-flash');

const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 5000;

// Connect to Database  
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Static Files
app.use(express.static('public'));

// Express Session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);

// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/employee'))

// // login route


// const authRoutes = require('./server/routes/auth');

// // Auth Routes
// app.use('/', authRoutes);

// // Middleware to check if user is logged in
// const isLoggedIn = (req, res, next) => {
//   if (req.session.user) {
//     res.locals.user = req.session.user; // Make user available in all views
//     next();
//   } else {
//     res.redirect('/login');
//   }
// };

// // Routes
// app.use('/', isLoggedIn, require('./server/routes/employee'));




app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(port, ()=> {
  console.log(`App listening on port ${port}`)
});
