export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Nharuvi Global</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Built for modern business. Driven by accuracy, automation, and trust. We're redefining accounting & compliance through technology and transparency.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Nharuvi Global Private Limited is a forward-thinking accounting and consulting firm committed to delivering Big Four–quality services with the agility, affordability, and innovation of a modern tech-driven practice.
        </p>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          We specialize in providing end-to-end financial, tax, and compliance solutions to businesses of all sizes—ranging from startups and SMEs to global enterprises. Our mission is to go beyond accounting by becoming a strategic partner in your growth journey. We combine global best practices, intelligent automation, and personalized insights to help our clients navigate the complexities of local and international regulations with clarity and confidence.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Principles</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-base list-disc pl-5">
          <li>Accuracy and integrity in every financial detail</li>
          <li>Client-first approach with proactive support</li>
          <li>Automation-driven efficiency and insights</li>
          <li>Global regulatory compliance & strategic alignment</li>
          <li>Big Four quality with startup-level agility</li>
        </ul>
      </section>

      {/* Trusted Partner Section */}
      <section className="bg-gray-100 rounded-xl p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Trusted Strategic Partner</h2>
        <p className="text-gray-700">
          We don’t just manage your books — we unlock your financial potential. With Nharuvi Global, you gain a team that deeply understands your business, anticipates regulatory challenges, and delivers actionable insights that fuel long-term growth.
        </p>
      </section>
    </main>
  );
}
