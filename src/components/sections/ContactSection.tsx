"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);

    // You can implement actual form submission logic here
    alert("Message sent! Thank you for reaching out.");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <div className="mb-16">
          <span className="text-beige-accent font-mono text-lg">
            04. What&apos;s Next?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-beige mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            Although I&apos;m not currently looking for any new opportunities,
            my inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-lg focus:border-beige-accent focus:outline-none text-beige placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-lg focus:border-beige-accent focus:outline-none text-beige placeholder-gray-400"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-lg focus:border-beige-accent focus:outline-none text-beige placeholder-gray-400"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-lg focus:border-beige-accent focus:outline-none text-beige placeholder-gray-400 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 border border-beige-accent text-beige-accent font-mono hover:bg-beige-accent/10 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Direct Contact */}
        <div className="mb-12">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 border border-beige-accent text-beige-accent font-mono hover:bg-beige-accent/10 transition-colors rounded-lg"
          >
            Say Hello
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm">
          <p className="mb-4">
            Built with <span className="text-beige-accent">Next.js</span> &{" "}
            <span className="text-beige-accent">Tailwind CSS</span>
          </p>
          <p>© 2025 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
