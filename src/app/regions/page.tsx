export default function RegionsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Global Reach, Local Expertise</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Nharuvi Global operates with a global outlook and local precision. Whether your business is based in India or spans international markets, we bring region-specific compliance and advisory to support your financial operations.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { region: 'India', desc: 'PAN-India service delivery with expertise in GST, TDS, MCA, Income Tax, and RBI/FEMA compliance.' },
          { region: 'USA', desc: 'Support for cross-border accounting, DTAA planning, 15CA/CB certification, and compliance for NRI/OCI investors.' },
          { region: 'United Kingdom', desc: 'Assistance for UK-based founders operating in India. Expertise in GAAP/IFRS and Indo-UK taxation.' },
          { region: 'Australia', desc: 'International entity setup, GST/VAT advisory, and regulatory filing for Australian startups entering India.' },
          { region: 'UAE & GCC', desc: 'VAT filing, cross-border accounting, and advisory on free-zone entity structuring and remittance laws.' },
          { region: 'Singapore & Southeast Asia', desc: 'FEMA/RBI reporting, transfer pricing, and advisory on expansion from India into ASEAN markets.' },
        ].map(({ region, desc }) => (
          <div key={region} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{region}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">How We Deliver Globally</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          We use secure cloud platforms, encrypted client portals, and collaborative dashboards to deliver seamless global services—whether you're based in Bengaluru or Boston.
        </p>
      </div>
    </main>
  );
}
