const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();
const router = express.Router();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

router.get("/submit-form", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    // Customize the payload
    const slackPayload = {
      text: `New form submission:\nEmail: ${formData.email}\nName: ${formData.name}\nPhone: ${formData.phone}\nBudget: ${formData.budget}\nProject Description: ${formData.projectDescription}`,
    };

    // Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    // Send the payload to Slack
    await axios.post(slackWebhookUrl, slackPayload);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error handling form submission:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

module.exports = router;
