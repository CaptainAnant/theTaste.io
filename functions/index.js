/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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"); // Replace with your actual key

exports.sendOrderConfirmation = functions.https.onRequest((req, res) => {
  const { email, orderId } = req.body;

  if (!email || !orderId) {
    return res.status(400).send("Missing email or order ID");
  }

  const token = Math.random().toString(36).substring(2, 10).toUpperCase(); // Simple token

  const msg = {
    to: email,
    from: "bookings.thetaste.io@gmail.com", // Use a verified sender
    subject: "Your Order Confirmation",
    html: `
      <h2>Thank you for your order!</h2>
      <p>Order ID: <strong>${orderId}</strong></p>
      <p>Confirmation Token: <strong>${token}</strong></p>
    `,
  };

  sgMail
    .send(msg)
    .then(() => res.status(200).send("Email sent successfully"))
    .catch((error) => {
      console.error("SendGrid Error:", error);
      res.status(500).send("Failed to send email");
    });
});