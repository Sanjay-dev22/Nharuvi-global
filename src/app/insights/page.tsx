export default function InsightsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Insights & Perspectives</h1>
      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Explore thought leadership from Nharuvi Global—curated insights, updates, and strategy-driven guidance to help you stay ahead in a dynamic regulatory landscape.
      </p>

      <div className="space-y-8">
        {[
          {
            title: '5 Common Tax Mistakes Startups Make—and How to Avoid Them',
            desc: 'From missed advance taxes to improper TDS deductions—understand how early-stage businesses can stay compliant and tax-efficient.',
          },
          {
            title: 'When Should a Business Hire a Virtual CFO?',
            desc: 'A strategic CFO is more than a cost—learn when growing businesses benefit from financial leadership on-demand.',
          },
          {
            title: 'India’s GST in 2025: Key Changes Every Business Should Know',
            desc: 'Stay updated on the latest compliance trends, reconciliations, and audit triggers as GST continues to evolve.',
          },
          {
            title: 'Scaling Your Startup Across Borders: Compliance Essentials',
            desc: 'Before expanding globally, ensure you’re aware of DTAA rules, 15CA/CB filings, and transfer pricing documentation.',
          },
        ].map(({ title, desc }) => (
          <div key={title}>
            <h3 className="text-2xl font-semibold mb-1 text-gray-900">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
