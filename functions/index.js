const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

    if (req.method === "OPTIONS") {
        res.status(200).send('OK');
        return;
    }

    if (req.method !== "POST") {
        res.status(405).send('Method Not Allowed');
        return;
    }



    // Initialize Firestore database
    const db = admin.firestore();

    // Extract IP address from request
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if(ip){
      // Rate limiting: check current count for this IP
      const currentHour = new Date().toISOString().slice(0, 13); // Year-month-day-hour
      const ipRef = db.collection('requests').doc(`${ip}-${currentHour}`);

      try {
          const ipDoc = await ipRef.get();
          if (ipDoc.exists && ipDoc.data().count >= 5) {
              res.status(429).send('Too many requests. Please try again later.');
              return;
          }

          // Increment request count for this IP
          await ipRef.set({ count: (ipDoc.data()?.count || 0) + 1 }, { merge: true });
      } catch (error) {
          res.status(500).send('Error checking rate limit');
          return;
      }
    }

    // Sanitization: Simple example removing script tags
    const sanitize = (text) => text.replace(/<script.*?>.*?<\/script>/gi, '');

    const name = sanitize(req.body.name);
    const phone = sanitize(req.body.phone);
    const message = sanitize(req.body.message);

    // Input validation
    if (!name || !phone || !message) {
        res.status(400).send('Missing name, phone, or message');
        return;
    }

    try {
        // Add a new document with a generated ID to the 'messages' collection
        const docRef = await db.collection('messages').add({
            name: name,
            phone: phone,
            message: message
        });

        res.status(200).send(`Message added with ID: ${docRef.id}`);
    } catch (error) {
        functions.logger.error('Error adding message to Firestore:', error);
        res.status(500).send('Internal Server Error');
    }
});