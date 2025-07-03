"use client";

import Link from "next/link";

const services = [
  {
    title: "Accounting & Bookkeeping",
    description:
      "Streamlined financial systems, cloud-based bookkeeping, and real-time insights tailored for growing businesses.",
    href: "/services/accounting",
  },
  {
    title: "Taxation & Regulatory Compliance",
    description:
      "Comprehensive direct and indirect tax services, including GST, TDS, ITR filing, audits, and departmental representation.",
    href: "/services/taxation",
  },
  {
    title: "Payroll & HR Compliance",
    description:
      "End-to-end payroll processing, employee tax structuring, and statutory filings under PF, ESI, PT, and labor laws.",
    href: "/services/payroll",
  },
  {
    title: "Business Setup & Registrations",
    description:
      "Complete entity setup in India — including Pvt Ltd, LLP, GST, PAN, MSME, Import-Export Code, and more.",
    href: "/services/registration",
  },
  {
    title: "Corporate Law & ROC Compliance",
    description:
      "Expert handling of ROC filings, director KYC, secretarial compliance, company conversions, and regulatory filings.",
    href: "/services/roc-compliance",
  },
  {
    title: "Virtual CFO & Financial Strategy",
    description:
      "Dedicated CFO services with budgeting, forecasting, MIS dashboards, investor reports, and growth planning.",
    href: "/services/virtual-cfo",
  },
  {
    title: "International & Cross-Border Advisory",
    description:
      "Global structuring, inbound/outbound investment, FEMA compliance, DTAA strategies, and 15CA/CB certifications.",
    href: "/services/international",
  },
  {
    title: "Audit, Assurance & Advisory",
    description:
      "Statutory, internal, and forensic audits, IFRS advisory, due diligence, and governance frameworks for sustainable growth.",
    href: "/services/audit",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="border rounded-lg p-6 hover:shadow-md transition-all duration-200 bg-white group"
          >
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            <div className="mt-4 text-primary font-medium text-sm group-hover:underline">
              Read more →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
