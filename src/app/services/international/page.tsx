"use client";

import Link from "next/link";

export default function InternationalServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          International & Cross-Border Services
        </h1>
        <p className="text-lg text-gray-700">
          Expand globally with confidence. Nharuvi Global offers integrated
          international business support, tax strategy, and regulatory
          compliance tailored to companies operating across borders.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Supporting Global Businesses Locally & Abroad
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Foreign Entity Setup:</strong> Launch your business in
            India—Private Limited, Liaison, Branch, or Subsidiary structures.
          </li>
          <li>
            <strong>Cross-Border Structuring:</strong> Establish global
            subsidiaries and navigate outbound investments with compliance.
          </li>
          <li>
            <strong>FEMA & RBI Compliances:</strong> FDI, ODI, FLA Return
            filings, and ECB advisory.
          </li>
          <li>
            <strong>DTAA Strategy:</strong> Double taxation relief planning and
            foreign tax credit optimization.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Transfer Pricing & International Taxation
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Transfer Pricing Compliance:</strong> 3CEB documentation,
            benchmarking studies, intercompany agreements.
          </li>
          <li>
            <strong>Expat & NRI Taxation:</strong> Residency status analysis,
            tax planning, and repatriation support.
          </li>
          <li>
            <strong>15CA/CB Certifications:</strong> Chartered Accountant
            certificates for remittances abroad.
          </li>
          <li>
            <strong>International GST & Customs:</strong> Advisory on
            import/export taxation, duties, and documentation.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Global ambitions. Local compliance.
        </h2>
        <p className="text-gray-700 mb-4">
          We’re here to guide you through every jurisdiction and regulation,
          from incorporation to cross-border operations—seamlessly and
          compliantly.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Start Your Global Journey
        </Link>
      </section>
    </main>
  );
}
