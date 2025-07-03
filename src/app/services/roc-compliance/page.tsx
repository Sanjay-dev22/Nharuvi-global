"use client";

import Link from "next/link";

export default function TaxCompliancePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Taxation & Compliance Services
        </h1>
        <p className="text-lg text-gray-700">
          Navigate complex tax regulations with clarity and confidence. Our comprehensive tax and compliance solutions are designed to reduce risks, maximize tax efficiency, and ensure seamless regulatory alignment for individuals and businesses.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Key Tax Services
        </h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-700">
          <li>
            <strong>Income Tax Filing:</strong> ITR filing for individuals (ITR 1–7), corporates, HNIs, NRIs, and expatriates.
          </li>
          <li>
            <strong>Tax Computation:</strong> Advance tax, self-assessment tax, capital gains computation and optimization.
          </li>
          <li>
            <strong>Tax Audit Compliance:</strong> Filing of Form 3CA/3CB/3CD with accuracy and timeliness.
          </li>
          <li>
            <strong>GST Compliance:</strong> Registration, return filing (GSTR-1, 3B, 9, 9C), LUT applications, refunds, reconciliation (2A/2B).
          </li>
          <li>
            <strong>TDS/TCS Filing:</strong> Quarterly return filing (24Q, 26Q), Form 16/16A generation, NIL/LDC support.
          </li>
          <li>
            <strong>Representation & Litigation:</strong> Drafting replies for notices under Sec. 143(1)/(2), GST assessments, faceless appeals.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Specialized Advisory Areas
        </h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-700">
          <li>
            Expatriate & Cross-Border Taxation (DTAA, 15CA/15CB, Transfer Pricing).
          </li>
          <li>
            Tax Planning for HNIs, start-ups, and global founders.
          </li>
          <li>
            GST automation & e-Invoicing integration for ERP and accounting systems.
          </li>
          <li>
            End-to-end compliance for new and existing entities.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Facing tax scrutiny or notice?
        </h2>
        <p className="text-gray-700 mb-4">
          Our experts will draft professional responses, represent you before tax authorities, and protect your compliance position with confidence.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Speak to a Tax Advisor
        </Link>
      </section>
    </main>
  );
}
