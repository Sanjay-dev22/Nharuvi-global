"use client";

import Link from "next/link";

export default function BusinessSetupPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Business Setup & Regulatory Compliance
        </h1>
        <p className="text-lg text-gray-700">
          Launch your business with confidence. We help entrepreneurs and
          enterprises navigate complex legal, tax, and regulatory landscapes to
          ensure seamless establishment and ongoing corporate compliance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Start Right. Stay Compliant.
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Entity Formation:</strong> Pvt Ltd, LLP, Partnership,
            Section 8 Company, OPC – complete end-to-end registration services.
          </li>
          <li>
            <strong>Essential Licenses:</strong> PAN, TAN, GST, IEC, MSME,
            Professional Tax, Shops & Establishment, FSSAI, ISO.
          </li>
          <li>
            <strong>Startup India & DPIIT Registration:</strong> Get
            government-recognized status and unlock benefits.
          </li>
          <li>
            <strong>Bank Account & DSC Setup:</strong> End-to-end assistance
            for smooth onboarding.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ongoing Corporate & ROC Compliance
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Annual Filings:</strong> MGT-7, AOC-4, ADT-1, DIR-3 KYC,
            Auditor Appointments.
          </li>
          <li>
            <strong>Secretarial Documentation:</strong> Minutes, Board
            Resolutions, Shareholder Registers, AGM/EGM records.
          </li>
          <li>
            <strong>Changes in Company Structure:</strong> Directors,
            shareholding, registered office, name change.
          </li>
          <li>
            <strong>Strike Off & Revival Support:</strong> STK-2 filing, NCLT
            guidance for company revival or closure.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Global, Transparent, Compliant
        </h2>
       <p className="text-gray-700">
  Whether you&rsquo;re a startup expanding into India or an Indian enterprise
  scaling globally, we ensure compliance with ROC, MCA, FEMA, RBI, and
  other regulatory bodies. Trust us to simplify your governance and
  legal operations.
</p>

      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Ready to launch or streamline your company’s compliance?
        </h2>
        <p className="text-gray-700 mb-4">
          We take care of the legal, statutory, and regulatory aspects so you
          can focus on growing your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Schedule a Consultation
        </Link>
      </section>
    </main>
  );
}
