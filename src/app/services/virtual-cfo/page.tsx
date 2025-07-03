"use client";

import Link from "next/link";

export default function FinancialAdvisoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Advisory & Virtual CFO
        </h1>
        <p className="text-lg text-gray-700">
          From early-stage startups to growing enterprises, we provide strategic
          financial leadership to help you scale confidently. Our Virtual CFO
          services combine financial intelligence, forecasting, and strategic
          insights to fuel sustainable growth.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Strategic Financial Leadership, On-Demand
        </h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-700">
          <li>
            <strong>Virtual CFO Services:</strong> Dedicated financial partner
            overseeing planning, reporting, risk, and capital strategy.
          </li>
          <li>
            <strong>Budgeting & Forecasting:</strong> Tailored financial models
            and dynamic forecasting aligned to your business goals.
          </li>
          <li>
            <strong>Cash Flow & Liquidity Management:</strong> Ensure healthy
            financial operations with active treasury monitoring and burn-rate
            control.
          </li>
          <li>
            <strong>Valuation & Fundraising Support:</strong> Support in
            preparing pitch decks, investor models, and financial due diligence
            documentation.
          </li>
          <li>
            <strong>Board & Stakeholder Reporting:</strong> Curated performance
            reports for leadership, investors, and lending institutions.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Insights That Drive Performance
        </h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-700">
          <li>
            Monthly MIS Reports and KPIs to track profitability, efficiency, and
            cash position.
          </li>
          <li>
            Cost-center and segment-wise financial performance analysis.
          </li>
          <li>
            Business valuation for growth, investment, and M&A readiness.
          </li>
          <li>
            Scenario planning and risk-adjusted forecasting.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Ready to make strategic financial decisions with confidence?
        </h2>
        <p className="text-gray-700 mb-4">
          Gain expert financial leadership without the cost of a full-time CFO.
          Our Virtual CFOs are industry-seasoned professionals dedicated to your
          success.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Connect With Our CFO Team
        </Link>
      </section>
    </main>
  );
}
