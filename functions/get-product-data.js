//domain/.netlify/functions/hello/create-payment-intent
require("dotenv").config();

const stripe = require("stripe")(process.env.VITE_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  console.log(event);
  //   console.log(context);

  return {
    statusCode: 200,
    body: "get product data",
  };
};
