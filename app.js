const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// ejs
app.set('view engine', 'ejs');
app.set('views', '/views');

app.locals.pretty = true;
app.use(express.static('public'));
app.use('/public', express.static('public'));

// route
app.get('/', (req, res) =>
{
	res.render('main');
});

// listen
app.listen(port, () =>
{
	console.log("Connected port" + port);
});