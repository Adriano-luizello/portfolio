import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  reply_to: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    reply_to: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.reply_to) {
      newErrors.reply_to = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.reply_to)) {
      newErrors.reply_to = 'Please enter a valid email address';
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    } else if (formData.subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const templateParams = {
        ...formData,
        to_name: 'Adriano',
        to_email: 'aluizello@gmail.com',
        time: timeString
      };

      const result = await emailjs.send(
        'service_mnl90ud',
        'template_as4aa0l',
        templateParams,
        'n3Wt3sAraoFGteVJN'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        // Clear form
        setFormData({
          name: '',
          reply_to: '',
          subject: '',
          message: ''
        });
        setErrors({});
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      // Auto-hide the status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const getInputClassName = (error?: string) => `
    w-full px-4 py-3 bg-white/5 rounded-xl border 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 
    transition-all duration-200 
    ${error 
      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
      : 'border-white/10 focus:border-white/20 focus:ring-white/10'
    }
  `;

  return (
    <div className="pt-16 sm:pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Let's Talk</h1>
              <p className="text-lg sm:text-xl text-white/60">
                Have a project in mind? Let's create something extraordinary together.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Location</h3>
                  <p className="text-white/60">Munich, Germany</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Email</h3>
                  <a href="mailto:aluizello@gmail.com" className="text-white/60 hover:text-white transition-colors">
                    aluizello@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Phone</h3>
                  <a href="tel:+393498448669" className="text-white/60 hover:text-white transition-colors">
                    +39 349 844 8669
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={getInputClassName(errors.name)}
                    required
                  />
                  {errors.name && (
                    <div className="absolute right-0 top-0 h-full pr-3 flex items-center pointer-events-none">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <div className="mt-2 flex items-center gap-2 text-red-500 text-sm animate-fadeIn">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    className={getInputClassName(errors.reply_to)}
                    required
                  />
                  {errors.reply_to && (
                    <div className="absolute right-0 top-0 h-full pr-3 flex items-center pointer-events-none">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.reply_to && (
                  <div className="mt-2 flex items-center gap-2 text-red-500 text-sm animate-fadeIn">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errors.reply_to}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={getInputClassName(errors.subject)}
                    required
                  />
                  {errors.subject && (
                    <div className="absolute right-0 top-0 h-full pr-3 flex items-center pointer-events-none">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.subject && (
                  <div className="mt-2 flex items-center gap-2 text-red-500 text-sm animate-fadeIn">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={getInputClassName(errors.message)}
                    required
                  />
                  {errors.message && (
                    <div className="absolute right-0 top-3 pr-3 flex items-start pointer-events-none">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.message && (
                  <div className="mt-2 flex items-center gap-2 text-red-500 text-sm animate-fadeIn">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {submitStatus.message && (
                <div 
                  className={`p-4 rounded-xl flex items-center gap-3 animate-fadeIn ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-white text-black rounded-xl hover:bg-white/90 
                  transition-all duration-200 flex items-center justify-center gap-2 group 
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white/20
                  active:scale-[0.98] transform text-base sm:text-lg font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}