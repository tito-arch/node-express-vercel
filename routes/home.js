const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // Your Slack webhook URL
    const slackWebhookUrl =
      "https://hooks.slack.com/services/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";

    // Message to send to Slack
    const slackMessage = {
      text: "The app is working properly!",
    };

    // Send a POST request to the Slack webhook URL
    await axios.post(slackWebhookUrl, slackMessage);

    return res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
    });
  } catch (error) {
    console.error("Error sending message to Slack:", error.message);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
