"use client";

import Link from "next/link";

export default function LitigationRepresentationPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Litigation, Representation & Regulatory Advisory
        </h1>
        <p className="text-lg text-gray-700">
          Regulatory challenges and departmental notices are inevitable—but they
          don’t have to disrupt your business. At Nharuvi Global, we provide
          professional representation and expert advisory before tax and
          regulatory authorities, ensuring timely, accurate, and strategic
          resolution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Expert Representation Before Authorities
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Income Tax & GST Litigation:</strong> Representation before
            assessment officers, appellate authorities, and tax tribunals.
          </li>
          <li>
            <strong>Faceless Assessments:</strong> Preparation and submission of
            e-responses under faceless scrutiny and appeal schemes.
          </li>
          <li>
            <strong>ROC, MCA & Regulatory Representation:</strong> Defense in
            corporate compliance matters, show cause notices, and filings.
          </li>
          <li>
            <strong>Response to Departmental Notices:</strong> Drafting replies
            under Sections 143(1), 143(2), 148 (IT), GSTR-3A, 9C mismatches
            (GST), etc.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          End-to-End Dispute Resolution Support
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Scrutiny Support:</strong> Collation of documents, audit
            trails, and preparation of justifications.
          </li>
          <li>
            <strong>Drafting Legal Submissions:</strong> Professionally
            structured and well-referenced response documents.
          </li>
          <li>
            <strong>Coordination with Legal Experts:</strong> Liaison with
            chartered accountants and lawyers for high-stakes cases.
          </li>
          <li>
            <strong>Preventive Compliance Advisory:</strong> Strengthen internal
            documentation and processes to reduce litigation risk.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Protect your business with expert litigation support.
        </h2>
        <p className="text-gray-700 mb-4">
          From notice handling to strategic representation, we help you resolve
          compliance challenges effectively—without disrupting your operations.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Speak to a Compliance Expert
        </Link>
      </section>
    </main>
  );
}
