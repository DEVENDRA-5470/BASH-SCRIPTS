const express = require("express");
const router = express.Router();

// GET /api/dashboard/kpis
router.get("/kpis", async (_req, res) => {
  // Mock data — replace with real DB queries later
  res.json({
    products: 1240,
    customers: 512,
    revenue: 284500,      // current month revenue
    expired: 7,           // optional extra KPI you can show
    addedMonthly: 63,     // optional extra KPI
    pending: 18750        // optional extra KPI (₹)
  });
});

// GET /api/dashboard/sales?days=30
router.get("/sales", async (req, res) => {
  const days = Number(req.query.days || 30);
  const labels = [];
  const values = [];

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(d.toISOString().slice(0, 10)); // YYYY-MM-DD
    values.push(Math.round(5000 + Math.random() * 9000)); // mock ₹ sales
  }

  res.json({ labels, values });
});

module.exports = router;
