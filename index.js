const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(express.json());

// זה הנתיב שיאפשר בדיקה מדפדפן
app.get("/get-product", async (req, res) => {
  try {
    const response = await axios.get("https://www.funyard.co.il/api/getproductlist", {
      headers: {
        Authorization: `Bearer F0E7DDDA-5E8D-4F54-BB18-571267CEF1EE`
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products", details: error.toString() });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
