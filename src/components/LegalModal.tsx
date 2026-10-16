import React, { useState } from 'react';
import { X, Shield, FileText, Mail, Send, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('Research Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactStatus('submitting');
    setTimeout(() => {
      setContactStatus('sent');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#111713] rounded-sm border border-stone-700 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-[#0e1410]">
          <div className="flex items-center gap-3">
            {type === 'privacy' && <Shield className="w-5 h-5 text-amber-500" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-amber-500" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-amber-500" />}
            <h2 className="font-editorial text-2xl text-[#f5f0e6] font-medium">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Use & Citation Standards'}
              {type === 'contact' && 'Contact Editorial Board'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-stone-400 hover:text-white hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed flex-1">
          {type === 'privacy' && (
            <div className="space-y-4">
              <p>
                <strong className="text-stone-100">1. Data Minimization & Privacy:</strong> LOST SPECIES is an educational natural history repository. We do not sell, rent, or monetize visitor personal data, nor do we employ tracking cookies or commercial ad beacons.
              </p>
              <p>
                <strong className="text-stone-100">2. Newsletter Communications:</strong> When you provide an email address for scientific dispatches, your information is processed strictly for delivering research digests. You may opt out at any time.
              </p>
              <p>
                <strong className="text-stone-100">3. External Links:</strong> Articles link out to museum collections and academic repositories (e.g., Nature, Science, Smithsonian, NHM London). Third-party destinations are governed by their respective privacy terms.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-4">
              <p>
                <strong className="text-stone-100">1. Academic & Educational Fair Use:</strong> Content, research overviews, and taxonomic summaries published on Lost Species are curated for public education, classrooms, and scholarly review under Fair Use principles.
              </p>
              <p>
                <strong className="text-stone-100">2. Citation Guideline:</strong> When referencing essays or data points in academic or editorial work, please cite the respective scientific paper from our bibliography and cite: <em className="text-amber-400">LOST SPECIES: Natural History Journal (2026)</em>.
              </p>
              <p>
                <strong className="text-stone-100">3. Scientific Accuracy Commitment:</strong> While our editorial team strives for rigorous factual alignment with current peer-reviewed paleontology, scientific understanding of ancient DNA and radiocarbon dates evolves continuously.
              </p>
            </div>
          )}

          {type === 'contact' && (
            <div>
              {contactStatus === 'sent' ? (
                <div className="p-6 rounded-sm bg-[#16271f] border border-[#2b5942] text-left">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Inquiry Transmitted to Editorial Queue</span>
                  </div>
                  <p className="text-xs text-stone-300 mb-3">
                    Thank you, <strong className="text-white">{contactName}</strong>. Our paleobiological review desk responds to academic inquiries within 2 to 3 business days.
                  </p>
                  <div className="p-3 bg-[#0c1410] border border-stone-800 text-[11px] text-stone-400">
                    <span className="text-amber-400 font-medium block mb-1">Integration Specification:</span>
                    To route production inquiry submissions directly to institutional email inboxes, integrate your mail proxy handler at <code className="text-stone-200">/api/contact</code>.
                  </div>
                  <button
                    onClick={() => {
                      setContactStatus('idle');
                      setContactName('');
                      setContactEmail('');
                      setContactMessage('');
                    }}
                    className="mt-4 text-xs text-amber-400 underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <p className="text-stone-400 text-xs mb-3">
                    Reach the LOST SPECIES editorial and scientific advisory panel for corrections, specimen inquiries, or educational partnerships.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-400 text-[11px] uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Dr. Jane Doe"
                        className="w-full px-3 py-2 rounded-sm bg-[#0b0f0d] border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-400 text-[11px] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="name@university.edu"
                        className="w-full px-3 py-2 rounded-sm bg-[#0b0f0d] border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-[11px] uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-3 py-2 rounded-sm bg-[#0b0f0d] border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                    >
                      <option>Research Inquiry & Fossil Specimen Verification</option>
                      <option>Editorial Correction or Citation Request</option>
                      <option>Educational Partnership & Institutional Access</option>
                      <option>General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-[11px] uppercase tracking-wider mb-1">
                      Message & Citation Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Please cite specific species accession numbers or article sections..."
                      className="w-full px-3 py-2 rounded-sm bg-[#0b0f0d] border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={contactStatus === 'submitting'}
                      className="px-5 py-2.5 rounded-sm bg-[#1b3a2b] hover:bg-[#254f3a] border border-[#377254] text-[#f5f0e6] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{contactStatus === 'submitting' ? 'Submitting...' : 'Send Message'}</span>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
