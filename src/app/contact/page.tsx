"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        We'd love to hear from you. Whether you have a question about our services or need help with your financial goals, our team is ready to help.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-green-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <a href="mailto:nharuviglobal@gmail.com" className="text-green-700 hover:underline">
                nharuviglobal@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-green-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p>+91 80569 95508</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-green-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-800">Office Location</p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Email Address" required />
          <Input placeholder="Phone Number" required />
          <textarea rows={4} className="w-full p-3 border rounded-md" placeholder="Your Message"></textarea>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" required />
            <label>I allow this website to store my submission so they can respond to my inquiry.</label>
          </div>
          <Button className="w-full text-lg">Send Message</Button>
        </form>
      </div>
    </main>
  );
}
