"use client";

import Link from "next/link";

export default function PayrollServicePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Payroll & HR Compliance
        </h1>
        <p className="text-lg text-gray-700">
          Ensure seamless payroll processing, employee satisfaction, and full statutory compliance. At Nharuvi Global, we help
          businesses streamline payroll operations and meet all labour law obligations without error or delay.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          What We Deliver:
        </h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-700">
          <li>
            <strong>Monthly Payroll Management:</strong> Timely payroll processing, payslip generation, TDS deduction, and salary structuring.
          </li>
          <li>
            <strong>Employee Tax & Declarations:</strong> Automated collection and validation of tax-saving proofs and declarations.
          </li>
          <li>
            <strong>Labour Law Registrations:</strong> PF, ESI, Professional Tax, Labour Welfare Fund, Shops & Establishment license setup.
          </li>
          <li>
            <strong>Statutory Filings:</strong> Monthly/quarterly return filings under EPFO, ESIC, PT, and LWF for complete compliance.
          </li>
          <li>
            <strong>Advisory on Gratuity, Bonus & Leave Encashment:</strong> Legal advisory & employee payout strategies for long-term retention and fairness.
          </li>
          <li>
            <strong>Labour Audit & Due Diligence:</strong> Regular audits to identify risks, errors, or non-compliance in HR processes.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Trusted By Businesses That Value Accuracy
        </h2>
        <ul className="space-y-2 list-disc pl-6 text-gray-700">
          <li>Our tech-integrated payroll systems reduce manual work and eliminate errors.</li>
          <li>Stay audit-ready with real-time compliance tracking and automated reminders.</li>
          <li>Scalable for startups, growing businesses, and distributed teams across India.</li>
          <li>Data privacy and salary confidentiality ensured via secure portals.</li>
        </ul>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Looking to integrate payroll with your financial reporting?
        </h2>
        <p className="text-gray-700 mb-4">
          Explore our <Link href="/services/virtual-cfo" className="text-primary hover:underline">Virtual CFO</Link> solutions for comprehensive payroll cost tracking and performance metrics.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Request a Payroll Consultation
        </Link>
      </section>
    </main>
  );
}
