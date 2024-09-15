// importing core modules fs, os, http , https etc to use them in this file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');
// app.set('view engine', 'pug'); //set global configuration value-built-in
app.set('view engine', 'ejs');
app.set('views', 'views'); // where to find our views

app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'page Not Found' });
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // does the same thing as above 2 lines.
