const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 9000;

const farmerRouter = require('./routes/farmer');
const consumerRouter = require('./routes/consumer.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/farmer', farmerRouter);
app.use('/consumer', consumerRouter);

app.listen(port, () => {
	console.log(`AgroTrust Master is running on ${port}`);
});
