// Import packages
const express = require("express");
const home = require("./routes/home");
const leads = require("./routes/leads")

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);
app.use("/submit-form", leads)

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
