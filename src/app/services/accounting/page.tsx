"use client";

import Link from "next/link";

export default function AccountingServicePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Accounting & Bookkeeping
        </h1>
        <p className="text-lg text-gray-700">
          At Nharuvi Global, we simplify your financial backbone through smart, scalable, and accurate accounting solutions.
          From cloud-enabled platforms to detailed MIS reporting, we ensure your books are not just clean — they’re insightful.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          What We Offer
        </h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-700">
          <li>
            <strong>Cloud & Offline Bookkeeping:</strong> Expertise across Tally, QuickBooks, Zoho Books, Xero, and Sage.
          </li>
          <li>
            <strong>Accounts Payable & Receivable Management:</strong> Improve working capital with timely vendor & client reconciliation.
          </li>
          <li>
            <strong>Bank Reconciliation & Ledger Scrutiny:</strong> Ensure financial accuracy, flag anomalies, and prevent leakages.
          </li>
          <li>
            <strong>Periodic Financial Statements & MIS:</strong> Monthly/quarterly performance dashboards tailored for decision-makers.
          </li>
          <li>
            <strong>Inventory & Fixed Asset Accounting:</strong> Track movement, depreciation, and lifecycle across assets and stock.
          </li>
          <li>
            <strong>Cost Accounting & Departmental Profitability:</strong> Measure margins across departments, projects, or business units.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          How This Helps You
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our accounting solutions go beyond compliance. We help startups, SMEs, and global businesses turn their numbers
          into clear financial strategies. Whether you’re scaling operations or preparing for investors, you’ll have
          real-time visibility into your performance — without worrying about the backend chaos.
        </p>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Want more than just bookkeeping?</h2>
        <p className="text-gray-700 mb-4">
          Explore our <Link href="/services/virtual-cfo" className="text-primary hover:underline">Virtual CFO & Financial Strategy</Link> services to take full control of your finances — from forecasting to fundraising.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Contact Our Accounting Team
        </Link>
      </section>
    </main>
  );
}
