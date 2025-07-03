"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function IntakeFormPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Client Intake Form</h1>
      <p className="text-gray-600 mb-8">
        Help us understand your business and requirements so we can serve you better.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input placeholder="Full Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Input placeholder="Phone Number" required />
        <Input placeholder="Business Name (if any)" />
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">What services are you interested in?</label>
          <select className="w-full border p-3 rounded-md">
            <option>Select</option>
            <option>Accounting & Bookkeeping</option>
            <option>Virtual CFO</option>
            <option>Tax & Compliance</option>
            <option>Business Setup</option>
            <option>Payroll & HR</option>
            <option>International Services</option>
          </select>
        </div>
        <Input placeholder="Estimated Annual Revenue" />
        <Input placeholder="Location (City, Country)" />
        <div className="md:col-span-2">
          <textarea
            rows={4}
            className="w-full p-3 border rounded-md"
            placeholder="Any deadlines or additional comments?"
          />
        </div>
        <div className="md:col-span-2 flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" required />
          <label>I allow this website to store my submission so they can respond to my inquiry.</label>
        </div>
        <Button className="md:col-span-2 w-full text-lg">Submit Form</Button>
      </form>
    </main>
  );
}
