require('dotenv').config()
const axios = require('axios');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(req,res){
  try{
    const { id,seats } = req.body.items
    const data=await axios.get(`http://localhost:1337/api/places/${id}`)
    const cost=data.data.data.attributes.cost
    const seatsAvailable=data.data.data.attributes.seat
    const paymentIntent = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Your Tour Cost',
            },
            unit_amount: cost * 100,
          },
          quantity: seats,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/successPage/${id}?seats=${seats}&available=${seatsAvailable}`,
      cancel_url: 'http://localhost:3000/cancel',
    });
    
    res.send({
      url:paymentIntent.url
    });
  }
  catch(e){
    console.error("Error:", e);
  }
}

module.exports={createPaymentIntent}