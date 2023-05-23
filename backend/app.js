require('dotenv').config()
const express = require("express");
var cors = require('cors')
const {createPaymentIntent} =require('./payment')
const app = express();
app.use(cors())

app.use(express.json());
app.post("/create-payment-intent",createPaymentIntent );
app.listen(process.env.PORT|6000, () => console.log("Node server listening on port 3010!"));






