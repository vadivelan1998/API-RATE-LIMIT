const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const limit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
});
//API work only 5 fetching then after 5 minutes it reset
const port = process.env.PORT || 5000;
app.get("/", limit, async (req, res) => {
  try {
    return res
      .status(200)
      .send("Hello World");
  } catch (error) {
    console.log(error.message);
  }
});
app.listen(port, async () => {
  try {
    console.log(`listening port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});