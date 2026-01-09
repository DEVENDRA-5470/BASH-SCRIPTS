// src/pages/Home.jsx
import React from 'react';
import heroImage from '../assets/bazaar up.png'; // replace with your actual hero image
import logo from '../assets/logo.png'; // replace with your actual hero image

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col ">
      {/* Header */}
     

      {/* Hero */}
      <main className="flex-1 flex flex-col md:flex-row items-center container mx-auto px-6 py-12 mt-14">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Connect  Your Shop With <span className='text-green-400 font-extrabold'>Bazaar Up</span></h2>
            
         <p className="text-lg text-gray-700 mb-6">
  Manage inventory, billing, and customer data seamlessly with our integrated microservices platform. 
  Automate stock tracking to avoid surprises at the register, generate professional invoices in seconds, 
  and maintain an up-to-date view of every customer’s purchase history and outstanding balance. 
  With real-time alerts for low stock or upcoming expirations, you’ll always know exactly what needs restocking. 
  Our modular architecture lets you add new features—like loyalty rewards or advanced reporting—as your business grows.
</p>
          <a
            href="/explore"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="Dashboard overview"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </main>

      {/* Features */}
{/* Features */}
<section className="bg-white py-12">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Key Features</h2>
    <p className="text-center text-gray-600 mb-8">
      Bazaar Up combines powerful inventory control, billing automation, and insightful reporting—all in a single, easy-to-use platform that scales with your business.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Real-Time Inventory</h3>
        <p className="text-gray-600">
          Track stock levels, expirations, and reorder points in a single dashboard.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Automated Billing</h3>
        <p className="text-gray-600">
          Issue invoices, record payments, and send receipts automatically.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Data Export</h3>
        <p className="text-gray-600">
          Allow customers to download purchase history and manage their account data easily.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Analytics Dashboard</h3>
        <p className="text-gray-600">
          Visualize sales trends, stock movement, and customer behavior with interactive charts.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Multi-Location Support</h3>
        <p className="text-gray-600">
          Manage inventory, sales, and reporting across multiple stores from one unified interface.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Notification Alerts</h3>
        <p className="text-gray-600">
          Get automatic email and SMS alerts for low stock, upcoming expiries, and billing events.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Stock Service API</h3>
        <p className="text-gray-600">
          Seamlessly add batches, update stock levels, and fetch low-stock items via our REST endpoints.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Inventory Management</h3>
        <p className="text-gray-600">
          Organize products into categories, set reorder thresholds, and automate restock workflows.
        </p>
      </div>
    </div>
  </div>
</section>


{/* About Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
          {/* Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Shop</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Bazaar Up – our family-owned general store serving the local community since 2018. What started as a small corner shop has grown into a trusted neighborhood hub, where every customer is greeted by name and every shelf is stocked with care.
            </p>
            <p className="text-gray-700 mb-4">
              We pride ourselves on offering quality products, from daily essentials to unique artisanal finds. By using the Bazaar Up platform, we ensure real-time inventory accuracy, so you never run out of your favorite items—and our friendly team can focus on helping you, not paperwork.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is simple: make shopping easy, reliable, and personal. Thank you for supporting our shop and being part of the Bazaar Up family!
            </p>
            {/* New extra content */}
            <p className="text-gray-700 mb-4">
              We believe in giving back. Each month a portion of our proceeds goes to local schools and charities, and we host community events—from holiday markets to family game nights—to bring everyone together.
            </p>
            <p className="text-gray-700 mb-4">
              Looking ahead, we’re expanding our product lines to include more eco-friendly and locally sourced items, and introducing a loyalty program that rewards you for every visit. Stay tuned for seasonal workshops, in-store tastings, and special member-only sales!
            </p>
            <p className="text-gray-700">
              Come by, say hello, and let us know how we can make your shopping experience even better. We’re proud to be your neighborhood store—today, tomorrow, and beyond.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2  flex justify-center">
            <img
            //   src={require('../assets/about-shop.jpg')}
              src={logo}
              alt="Inside our shop"
              className="rounded-lg shadow-lg max-w-sm"
            />
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Bazaar Up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
