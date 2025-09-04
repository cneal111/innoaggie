const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_API_KEY);
const fetch = global.fetch || ((...args) => import('node-fetch').then(m => m.default(...args)));

app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 });
        for (const item of lineItems.data) {
          const strapiProductId = item.price?.metadata?.strapi_product_id;
          const qty = item.quantity || 0;
          if (strapiProductId && qty > 0) await updateStrapiInventory(strapiProductId, -qty);
        }
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    res.sendStatus(200);
  } catch (err) {
    console.error("Handler error:", err);
    res.status(500).send("Webhook handler error");
  }
});

app.get("/healthz", (_req, res) => res.send("ok"));
app.listen(process.env.PORT || 3000, () => console.log(`Listening on ${process.env.PORT || 3000}`));

async function updateStrapiInventory(productId, delta) {
  if (!process.env.STRAPI_API_URL || !process.env.STRAPI_TOKEN) return;
  const url = `${process.env.STRAPI_API_URL}/api/inventory/${productId}/delta`;
  const resp = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.STRAPI_TOKEN}`
    },
    body: JSON.stringify({ delta })
  });
  if (!resp.ok) throw new Error(`Strapi update failed: ${resp.status} ${await resp.text()}`);
}