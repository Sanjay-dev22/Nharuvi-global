export default function IndustriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Industries We Serve</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        At Nharuvi Global, we provide tailored accounting and compliance solutions across key industries. We understand the challenges of each domain and offer industry-specific expertise to drive sustainable growth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Technology & SaaS', desc: 'From startups to scale-ups, we help you manage multi-entity finances, investor reporting, and SaaS metrics with cloud-native systems.' },
          { title: 'E-commerce & Retail', desc: 'Simplified GST, TDS, inventory, and vendor reconciliation. Compliance-ready automation for marketplaces and D2C brands.' },
          { title: 'Healthcare & Pharma', desc: 'Regulatory-compliant accounting for clinics, labs, and pharma distributors. Accurate inventory and statutory filing support.' },
          { title: 'Manufacturing & Supply Chain', desc: 'Cost accounting, fixed asset tracking, and vendor payments—all streamlined for operational clarity and compliance.' },
          { title: 'Real Estate & Construction', desc: 'Project-based financial tracking, RERA advisory, and income recognition customized for builders and developers.' },
          { title: 'Startups & SMEs', desc: 'End-to-end support from incorporation to funding. Virtual CFO, MIS dashboards, ESOP consulting, and statutory guidance.' },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
