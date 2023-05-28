require("dotenv").config();
const axios = require("axios");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(req, res) {
  try {
    const { id, seats } = req.body.items;
    const data = await axios.get(
      `${process.env.STRAPI_SERVER}/api/places/${id}`
    );
    const cost = data.data.data.attributes.cost;
    const seatsAvailable = data.data.data.attributes.seat;
    const paymentIntent = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Your Tour Cost",
            },
            unit_amount: cost * 100,
          },
          quantity: seats,
        },
      ],
      mode: "payment",
      success_url: `${process.FRONTEND_URL}/successPage/${id}?seats=${seats}&available=${seatsAvailable}`,
      cancel_url: `${process.FRONTEND_URL}/cancel`,
    });

    res.send({
      url: paymentIntent.url,
    });
  } catch (e) {
    res.send({
          error:{
             message:error.message
          }
      })
    }
}

module.exports = { createPaymentIntent };
