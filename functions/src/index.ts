import * as functions from "firebase-functions";
import express, {Request, Response} from "express";
import cors from "cors";
import StripeLib from "stripe"; // Renamed to follow convention

const stripe = new StripeLib(
  "sk_test_51OyD51SFw49bCftFIGoi673jlZzPNNLb9MARoJ2Jh0Pm" +
    "2wZCnXkw4zAjM0sPmSzoI3KYafWRQvJ3kGZ8RsCqbc4f003sIThxKk"
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req: Request, res: Response) =>
  res.status(200).send("Hello World")
);
app.post("/payments/create", async (req: Request, res: Response) => {
  const totalString = req.query.total as string; // Explicit naming
  const total = parseInt(totalString); // Separate parsing to a new line
  console.log("Payment Request received:", total);

  try {
    const paymentIntentData = {amount: total, currency: "usd"};
    const paymentIntent = await stripe.paymentIntents.create(paymentIntentData);
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send({
      error: {message: "Payment failed. Please try again later."},
    });
  }
});


exports.api = functions.https.onRequest(app);
