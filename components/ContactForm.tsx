'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [quoteType, setQuoteType] = useState<'residential' | 'commercial' | ''>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    name: '',
    businessName: '',
    email: '',
    phone: '',
    address: '',
    businessAddress: '',
    services: [] as string[],
    otherServices: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const residentialServices = [
    'Exterior House Wash',
    'Roof Treatment',
    'Driveway Cleaning',
    'Gutter Cleaning',
    'Patio Cleaning',
    'Fence Washing',
    'Deck Cleaning',
    'Sidewalk Cleaning',
    'Pathway Cleaning',
  ];

  const commercialServices = [
    'Building Soft Wash',
    'Commercial Roof Treatments',
    'Large Ground Surface Area Clean',
    'Store Fronts',
    'Car Parks Surface Cleaning',
    'Commercial Fence Washing',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          quoteType,
        }),
      });

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        // Try to parse error message, but handle cases where response might not be JSON
        let errorMessage = 'Something went wrong. Please try again.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If response is not JSON, use status text or default message
          if (response.status === 405) {
            errorMessage = 'API endpoint not available. Please contact us directly.';
          } else {
            errorMessage = `Server error (${response.status}). Please try again or call us directly.`;
          }
        }
        setSubmitStatus({
          type: 'error',
          message: errorMessage,
        });
        return;
      }

      // Parse successful response
      try {
        await response.json();
      } catch {
        // If response is not JSON but status is OK, assume success
      }

      // Handle successful response
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within the hour.',
      });
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        name: '',
        businessName: '',
        email: '',
        phone: '',
        address: '',
        businessAddress: '',
        services: [],
        otherServices: '',
      });
      setQuoteType('');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitStatus({ type: null, message: '' });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mx-auto p-4 md:p-10 bg-white rounded-lg">
          {/* Header - Always visible */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-primary">INSTANT QUOTE</span>{' '}
              <span className="text-gray-900">TODAY</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-2">
              We&apos;ll get back to you within the hour! Or call us on{' '}
              <a href="tel:0272325990" className="text-primary font-semibold hover:underline">
                027 232 5990
              </a>
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Or send us an email{' '}
              <a href="mailto:james@snowhitewaterblasting.co.nz" className="text-primary hover:underline">
                james@snowhitewaterblasting.co.nz
              </a>
            </p>
          </div>

          {/* Success Message - Show when submitted */}
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="mb-6">
                <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We&apos;ve received your enquiry and will get back to you within the hour.
              </p>
              <p className="text-base text-gray-600 mb-8">
                If you need immediate assistance, please call us on{' '}
                <a href="tel:0272325990" className="text-primary font-semibold hover:underline">
                  027 232 5990
                </a>
              </p>
              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="mx-auto"
              >
                Submit Another Enquiry
              </Button>
            </div>
          ) : (
            <>
              {/* Error Message - Only show for errors */}
              {submitStatus.type === 'error' && (
                <div className="mb-6 p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Quote Type Dropdown */}
                <div>
                  <label htmlFor="quoteType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Select Quote Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="quoteType"
                    value={quoteType}
                    onChange={(e) => {
                      setQuoteType(e.target.value as 'residential' | 'commercial' | '');
                      setFormData({
                        firstName: '',
                        lastName: '',
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        address: '',
                        businessAddress: '',
                        services: [],
                        otherServices: '',
                      });
                    }}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all"
                  >
                    <option value="">-- Select Quote Type --</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                {/* Conditional Fields */}
                {quoteType === 'residential' && (
                  <>
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter your first name..."
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter your last name..."
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter phone number..."
                      />
                    </div>

                    {/* Services - Checkboxes */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Choose the Service(s) You Are Interested In:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {residentialServices.map((service) => (
                          <label key={service} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Other Services */}
                    <div>
                      <label htmlFor="otherServices" className="block text-sm font-semibold text-gray-900 mb-2">
                        Other Services Add On&apos;s
                      </label>
                      <textarea
                        id="otherServices"
                        name="otherServices"
                        value={formData.otherServices}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
                        placeholder="Enter any additional services..."
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter address..."
                      />
                    </div>
                  </>
                )}

                {quoteType === 'commercial' && (
                  <>
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter your name..."
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
                        Business Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter business name..."
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter phone number..."
                      />
                    </div>

                    {/* Services - Checkboxes */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Choose the Service(s) You Are Interested In:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {commercialServices.map((service) => (
                          <label key={service} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Other Services */}
                    <div>
                      <label htmlFor="otherServices" className="block text-sm font-semibold text-gray-900 mb-2">
                        Other Services Add On&apos;s
                      </label>
                      <textarea
                        id="otherServices"
                        name="otherServices"
                        value={formData.otherServices}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
                        placeholder="Enter any additional services..."
                      />
                    </div>

                    {/* Business Address */}
                    <div>
                      <label htmlFor="businessAddress" className="block text-sm font-semibold text-gray-900 mb-2">
                        Business Address
                      </label>
                      <input
                        type="text"
                        id="businessAddress"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter business address..."
                      />
                    </div>
                  </>
                )}

                {/* Submit Button - Only show when quote type is selected */}
                {quoteType && (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary hover:border-secondary text-white hover:text-white font-semibold py-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND'}
                  </Button>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
