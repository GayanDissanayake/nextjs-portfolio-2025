"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "../ScrollAnimation";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Gayan",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const resetStatus = () => setStatus("idle");

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20 bg-slate-950"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-beige mt-4 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-lg mx-auto mb-8">
              I&apos;m always open to new opportunities, interesting projects,
              or just a conversation about technology. Drop me a message and
              I&apos;ll get back to you.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="max-w-lg mx-auto">
            {status === "success" ? (
              <div className="bg-emerald-900/30 border border-emerald-500/40 rounded-2xl p-10 mb-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-emerald-300 font-bold text-xl mb-2">
                  Message sent!
                </h3>
                <p className="text-emerald-200/80 text-sm mb-6">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={resetStatus}
                  className="text-emerald-400 hover:text-emerald-300 font-mono text-sm underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/60 rounded-xl focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-slate-100 placeholder-slate-400 transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/60 rounded-xl focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-slate-100 placeholder-slate-400 transition-all duration-300"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/60 rounded-xl focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-slate-100 placeholder-slate-400 resize-none transition-all duration-300"
                />

                {status === "error" && (
                  <p className="text-red-400 text-sm font-mono text-left">
                    Something went wrong. Please try emailing me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-900 font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-amber-500/20"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}

            {/* Alternative contact methods */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">Or connect directly:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:hey.its.gayan@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-beige-accent transition-colors group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-mono">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/gayansasankadissanayake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-beige-accent transition-colors group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-mono">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/GayanDissanayake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-beige-accent transition-colors group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-sm font-mono">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <footer className="text-center text-gray-500 text-sm pt-16 mt-8 border-t border-slate-800">
          <p className="mb-2">
            Built with{" "}
            <span className="text-beige-accent">Next.js 15</span> &{" "}
            <span className="text-beige-accent">Tailwind CSS</span>
          </p>
          <p>© {new Date().getFullYear()} Gayan Dissanayake. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
