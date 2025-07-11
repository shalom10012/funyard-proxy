// index.js
const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/get-product", async (req, res) => {
  try {
    const response = await axios.get("https://www.funyard.co.il/api/getproductlist", {
      headers: {
        "Authorization": `Bearer ${process.env.API_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products", details: error.toString() });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`✅ Proxy server running on port ${PORT}`));
