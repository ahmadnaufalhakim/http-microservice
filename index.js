const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const studentRouter = require('./routes/students/students');

// pool.getConnection()
//   .then((conn) => {
//     console.log(conn);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(pool);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/api', studentRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});

module.exports = app;