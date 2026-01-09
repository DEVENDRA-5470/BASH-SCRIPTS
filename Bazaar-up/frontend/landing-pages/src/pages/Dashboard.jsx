// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ------- TEMP: turn off API and use mock data -------
const USE_MOCK = true;

const MOCK_KPIS = {
  products: 1240,
  customers: 512,
  revenue: 284500, // ₹ current month
  expired: 7,
  addedMonthly: 63,
  pending: 18750
};

function buildMockSales(days = 30) {
  const labels = [];
  const values = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(d.toISOString().slice(0, 10)); // YYYY-MM-DD
    values.push(Math.round(5000 + Math.random() * 9000)); // mock ₹
  }
  return { labels, values };
}

const MOCK_SALES = buildMockSales(30);

const MOCK_LOW_STOCK = [
  { productId: "MILK-500", name: "Toned Milk 500ml", stock: 6 },
  { productId: "BREAD-WHT", name: "White Bread", stock: 3 },
  { productId: "EGG-12", name: "Egg Tray (12)", stock: 4 }
];

export default function Dashboard() {
  const [kpis, setKpis] = useState({ products: 0, customers: 0, revenue: 0, expired: 0, addedMonthly: 0, pending: 0 });
  const [salesData, setSalesData] = useState({ labels: [], values: [] });
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    if (USE_MOCK) {
      setKpis(MOCK_KPIS);
      setSalesData(MOCK_SALES);
      setLowStock(MOCK_LOW_STOCK);
      return;
    }

    // When you’re ready to re-enable API:
    // import axios from "axios";
    // (async () => {
    //   try {
    //     const [kpisRes, salesRes, lowRes] = await Promise.all([
    //       axios.get("/api/dashboard/kpis"),
    //       axios.get("/api/dashboard/sales?days=30"),
    //       axios.get("/api/stock/low"),
    //     ]);
    //     setKpis(kpisRes.data);
    //     setSalesData(salesRes.data);
    //     setLowStock(lowRes.data);
    //   } catch (err) {
    //     console.error("Dashboard load failed:", err?.response?.data || err?.message);
    //   }
    // })();
  }, []);

  const chartData = {
    labels: salesData.labels,
    datasets: [
      {
        label: "Sales",
        data: salesData.values,
        fill: false,
        borderColor: "#3B82F6", // blue-500
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: false } },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Sales (₹)" }, beginAtZero: true }
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-700">Dashboard Overview</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Total Products</p>
          <p className="text-2xl font-semibold text-blue-600">
            {kpis.products?.toLocaleString() || "0"}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Active Customers</p>
          <p className="text-2xl font-semibold text-blue-600">
            {kpis.customers?.toLocaleString() || "0"}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Monthly Revenue</p>
          <p className="text-2xl font-semibold text-blue-600">
            ₹{kpis.revenue?.toLocaleString() || "0"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Expired Products</p>
          <p className="text-2xl font-semibold text-blue-600">
            {kpis.expired?.toLocaleString() || "0"}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Product Added (Monthly)</p>
          <p className="text-2xl font-semibold text-blue-600">
            {kpis.addedMonthly?.toLocaleString() || "0"}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Total Pending Amount</p>
          <p className="text-2xl font-semibold text-blue-600">
            ₹{kpis.pending?.toLocaleString() || "0"}
          </p>
        </div>
      </div>

      {/* Sales Chart & Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales This Month</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Alerts</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {Array.isArray(lowStock) && lowStock.length > 0 ? (
              lowStock.map((item) => (
                <li key={item.productId}>
                  {item.name} - {item.stock} units left
                </li>
              ))
            ) : (
              <li>No low stock items</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
