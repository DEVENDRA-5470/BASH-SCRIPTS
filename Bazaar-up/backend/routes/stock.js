const express = require("express");
const router = express.Router();

// GET /api/stock/low
router.get("/low", async (_req, res) => {
  // Mock low stock list — replace with real query later
  res.json([
    { productId: "MILK-500", name: "Toned Milk 500ml", stock: 6 },
    { productId: "BREAD-WHT", name: "White Bread", stock: 3 },
    { productId: "EGG-12", name: "Egg Tray (12)", stock: 4 }
  ]);
});

module.exports = router;
