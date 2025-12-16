"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const trimmedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      };

      if (
        !trimmedData.name ||
        !trimmedData.email ||
        !trimmedData.phone ||
        !trimmedData.message
      ) {
        throw new Error("Please fill in all fields.");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });

      let data: { message?: string; error?: string };
      try {
        data = (await response.json()) as { message?: string; error?: string };
      } catch {
        throw new Error("Invalid response from server. Please try again.");
      }

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message. Please try again.");
      }

      // Hide form and show thank you message
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: unknown) {
      let errorMessage = "An error occurred. Please try again later.";

      if (error instanceof Error) errorMessage = error.message;

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });

      setTimeout(() => {
        setSubmitStatus((prev) =>
          prev.type === "error" ? { type: null, message: "" } : prev
        );
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show thank you message if form was successfully submitted
  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center py-8">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-[24px] sm:text-[28px] font-bold font-roboto text-text-dark mb-3">
            Thank You!
          </h3>
          <p className="text-[16px] sm:text-[18px] font-inter text-text-dark leading-relaxed">
            Your message has been sent successfully. We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message - Only show for errors */}
      {submitStatus.type === "error" && submitStatus.message && (
        <div
          className="p-4 rounded-none bg-red-50 text-red-800 border border-red-200"
          role="alert"
          aria-live="polite"
        >
          <p className="font-inter text-[14px] sm:text-[15px] leading-relaxed">
            {submitStatus.message}
          </p>
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-[16px] font-roboto font-medium text-text-dark"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all font-inter text-[16px] text-text-dark placeholder:text-text-light"
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-[16px] font-roboto font-medium text-text-dark"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all font-inter text-[16px] text-text-dark placeholder:text-text-light"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-[16px] font-roboto font-medium text-text-dark"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all font-inter text-[16px] text-text-dark placeholder:text-text-light"
          placeholder="+64 XX XXX XXXX"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-[16px] font-roboto font-medium text-text-dark"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all font-inter text-[16px] text-text-dark resize-y placeholder:text-text-light"
          placeholder="Tell us about your needs or questions..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-brand-blue hover:bg-[#023d8a] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-none font-roboto font-normal transition-colors gap-2"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
