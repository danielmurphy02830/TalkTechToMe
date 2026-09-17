import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  Briefcase, 
  User, 
  Building2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { BRAND_INFO, COLLABORATION_TYPES } from '../data/content';

export const CollaborationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    collabType: COLLABORATION_TYPES[0].id,
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_INFO.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const typeObj = COLLABORATION_TYPES.find(t => t.id === formData.collabType);
    const selectedTypeLabel = typeObj ? typeObj.label : formData.collabType;

    const emailSubject = encodeURIComponent(
      `[TalkTechToMe Collab] ${formData.subject || selectedTypeLabel} - from ${formData.name}`
    );

    const emailBody = encodeURIComponent(
      `Hi Dan,\n\nI'm reaching out regarding a collaboration with TalkTechToMe.\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Company / Organization: ${formData.company || 'N/A'}\n` +
      `• Collaboration Type: ${selectedTypeLabel}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Sent via talktechtome.co.uk`
    );

    // Open default email client directed to danielmurphy02830@gmail.com
    const mailtoUrl = `mailto:${BRAND_INFO.contactEmail}?subject=${emailSubject}&body=${emailBody}`;
    
    // Simulate brief transition for snappy UX
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="collaborate" className="py-20 bg-[#080d1a] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details & Collab types */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let&apos;s Collaborate
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Building an innovative AI tool, software product, or looking for an in-depth review and tutorial? Reach out directly to discuss sponsorships, demos, or speaking.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-[#0e162b] border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" /> Direct Inquiries
                </span>
                <span className="text-[11px] font-mono text-emerald-400">Replies within 24-48h</span>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                <a 
                  href={`mailto:${BRAND_INFO.contactEmail}`}
                  className="font-mono text-sm text-cyan-300 hover:underline truncate"
                >
                  {BRAND_INFO.contactEmail}
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="shrink-0 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-400 font-medium animate-in fade-in duration-200">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Collaboration Tracks */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Collaboration Tracks
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {COLLABORATION_TYPES.slice(0, 4).map((type) => (
                  <div key={type.id} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">{type.label}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40 shadow-lg shadow-emerald-500/10">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Opening Your Email Client...</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry details have been formatted and directed to <strong className="text-cyan-400">{BRAND_INFO.contactEmail}</strong>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${BRAND_INFO.contactEmail}?subject=Collaboration%20Inquiry%20from%20${formData.name}`}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-colors"
                    >
                      Click Here If Not Opened Automatically
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-xs hover:bg-slate-700 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" /> Send a Message
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">All fields routed to Gmail</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" /> Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Dan Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" /> Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="dan@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company / Product */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" /> Company or Project
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. AI Startup / Channel"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Collaboration Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Interest Track
                      </label>
                      <select
                        name="collabType"
                        value={formData.collabType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        {COLLABORATION_TYPES.map((t) => (
                          <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Review request for our new AI tool"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell Dan about your product, timeline, or collaboration proposal..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Formatting inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send to danielmurphy02830@gmail.com</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Protected by standard client dispatch. Direct emails go to <strong className="text-slate-400">{BRAND_INFO.contactEmail}</strong>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
