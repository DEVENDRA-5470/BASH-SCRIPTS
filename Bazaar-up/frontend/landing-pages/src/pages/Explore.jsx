import React from 'react';

export default function Explore() {
  const servicesList = [
    {
      id: 'stock',
      name: 'Stock Service',
      icon: (
        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
      description: 'Manage inventory batches with FIFO logic, batch expiry tracking, and configurable low-stock alerts via email/SMS.',
      features: [
        'Batch-level expiry notifications',
        'Custom reorder threshold settings',
        'Real-time stock sync across locations'
      ],
      docsUrl: '/docs/stock-service'
    },
    {
      id: 'billing',
      name: 'Billing Service',
      icon: (
        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2-2m0 0l2-2m-2 2v6m-4-6h8a2 2 0 012 2v6H7v-6a2 2 0 012-2z" />
        </svg>
      ),
      description: 'Automate invoice generation, payment processing, and reminders with secure transaction logging and financial audit trails.',
      features: [
        'Dynamic invoice templates',
        'Partial and bulk payment support',
        'Automated overdue notifications'
      ],
      docsUrl: '/docs/billing-service'
    },
    {
      id: 'customer',
      name: 'Customer Service',
      icon: (
        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.492 0 4.826.721 6.879 1.956M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Handle customer profiles, payment histories, and GDPR-compliant data exports in CSV/PDF formats with secure endpoints.',
      features: [
        'Self-service data download portal',
        'Outstanding balance tracking',
        'Role-based data access'
      ],
      docsUrl: '/docs/customer-service'
    },
    {
      id: 'auth',
      name: 'Auth Service',
      icon: (
        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v3h6v-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11v3a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-3" />
        </svg>
      ),
      description: 'Enterprise-grade authentication with JWT, OAuth2 support, multi-factor flows, and granular RBAC middleware.',
      features: [
        'OAuth2 / SSO integrations',
        'MFA & OTP support',
        'JWT expiry & refresh tokens'
      ],
      docsUrl: '/docs/auth-service'
    },
    {
      id: 'notification',
      name: 'Notification Service',
      icon: (
        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14H6a2.032 2.032 0 01-1.595.595L3 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      description: 'Schedule and dispatch email/SMS alerts for key events using cron triggers and queue-based retries for reliability.',
      features: [
        'Template management',
        'Retry & DLQ processing',
        'Custom event webhooks'
      ],
      docsUrl: '/docs/notification-service'
    },
    {
      id: 'reporting',
      name: 'Reporting Service',
      icon: (
        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 00-2-2H5m14 8v-4a2 2 0 00-2-2h-2m0 0V5a2 2 0 00-2-2h-2m-4 0H7a2 2 0 00-2 2v2" />
        </svg>
      ),
      description: 'Consolidate data from all services into scheduled or on-demand PDF/CSV exports with secure download links.',
      features: [
        'Custom report templates',
        'Scheduled exports',
        'Secure S3-backed download'
      ],
      docsUrl: '/docs/reporting-service'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
<h1 className="text-4xl font-bold text-blue-700 mb-6">Our Microservices</h1>
<p className="text-gray-600 mb-8">
  Bazaar Up is powered by independent, enterprise-grade microservices—each focused on a specific domain, from inventory tracking and batch management to invoice generation and customer portals. They communicate via lightweight APIs and event-driven workflows, integrating fault tolerance, observability, Redis queues, cron-based tasks, and notification pipelines to ensure reliable stock alerts, billing receipts, and data downloads. This modular architecture lets you deploy updates, add features, scale individual components without downtime, and seamlessly integrate third-party systems or run services across multiple regions for low latency, empowering your retail operations to grow without compromise.
</p>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <div className="flex items-center mb-4">
                {service.icon}
                <h2 className="text-2xl font-semibold text-gray-800 ml-3">{service.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-500 mb-4">
                {service.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
              <a
                href={service.docsUrl}
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}