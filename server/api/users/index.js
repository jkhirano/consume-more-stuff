const express = require("express");
const router = express.Router();

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in users." });
});

module.exports = router;
