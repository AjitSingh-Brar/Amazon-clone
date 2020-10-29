const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HfDF5Ju8dnyk3fI7iiNiKsAPbk66LtDo6JGiwLfytlBHeCR732KqZ7yzNQjDUQy7BX4LjaqRR0iDpOrDO0DbQiV00bKCz8LFz"
);

//- API

//- App config
const app = express();

//- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//- API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//- Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-dcbcf/us-central1/api
