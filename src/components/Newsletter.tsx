import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g., name@institution.org).');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please confirm your consent to receive our natural history dispatch.');
      return;
    }

    setStatus('submitting');

    // Simulate validation cycle and present honest interface notice
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <section className="py-20 bg-[#0b0f0d] border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm bg-gradient-to-b from-[#141d18] to-[#0f1612] border border-stone-800 p-8 sm:p-12 text-center overflow-hidden shadow-2xl shadow-black/50">
          {/* Subtle amber glow accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-amber-500/10 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Bi-Weekly Natural History Dispatch</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e6] font-medium tracking-tight mb-4">
              Explore the Lost World.
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              Get fascinating discoveries about extinct animals, ancient life, and natural history delivered to your inbox.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-sm bg-[#16271f] border border-[#2b5942] text-left animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Subscription Request Validated</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  Thank you for subscribing with <strong className="text-stone-100">{email}</strong>.
                </p>
                <div className="p-3 rounded-sm bg-[#0c1410] border border-stone-800 text-[11px] text-stone-400 leading-normal">
                  <span className="text-amber-400 font-medium block mb-1">Developer Notice:</span>
                  Frontend email validation completed. To store subscriber records permanently or dispatch actual emails, configure your mailing provider (e.g. Resend, SendGrid, or Mailchimp API) in your environment variables.
                </div>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setEmail('');
                    setConsent(false);
                  }}
                  className="mt-4 text-xs text-amber-400 hover:text-amber-300 underline cursor-pointer"
                >
                  Register another address
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="text-left max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      aria-label="Email address for dispatch"
                      className="w-full px-4 py-3 rounded-sm bg-[#0b0f0d] border border-stone-700 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-6 py-3 rounded-sm bg-[#1b3a2b] hover:bg-[#254f3a] border border-[#377254] text-[#f5f0e6] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'Validating...' : 'Subscribe'}</span>
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 text-xs text-stone-400 mb-2">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-stone-700 bg-stone-900 text-amber-500 focus:ring-amber-500 focus:ring-offset-stone-900"
                  />
                  <label htmlFor="newsletter-consent" className="leading-tight cursor-pointer">
                    I agree to receive editorial research digests from Lost Species. Unsubscribe at any time. We respect strict privacy and never share emails.
                  </label>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-rose-400 mt-2 bg-rose-950/30 p-2.5 rounded-sm border border-rose-900/50">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
