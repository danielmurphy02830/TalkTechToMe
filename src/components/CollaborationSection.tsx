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
    
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="collaborate" className="py-20 bg-[#0B0F19] border-t border-[#1F2937] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details & Collab types */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#FFBF00] uppercase font-semibold">
                Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let&apos;s Collaborate
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Building an innovative AI tool or looking for an in-depth review, benchmark, or keynote? Reach out directly to discuss sponsorships, demos, or advisory.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-[#1F2937] space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Mail className="w-4 h-4 text-[#FFBF00]" /> Direct Inquiries
                </span>
                <span className="text-[11px] font-mono text-emerald-400">Replies within 24-48h</span>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 bg-[#0B0F19] rounded-xl border border-[#1F2937]">
                <a 
                  href={`mailto:${BRAND_INFO.contactEmail}`}
                  className="font-mono text-xs sm:text-sm text-cyan-400 hover:underline truncate"
                >
                  {BRAND_INFO.contactEmail}
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="shrink-0 p-2 rounded-lg bg-[#1F2937] hover:bg-[#374151] text-slate-300 hover:text-white transition-all"
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
                  <div key={type.id} className="p-3 rounded-xl bg-[#111827] border border-[#1F2937] flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">{type.label}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hugging Face Styled Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-10 border border-[#1F2937] relative">
              
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
                      className="px-5 py-2.5 rounded-xl bg-[#FFBF00] text-black font-bold text-xs hover:bg-[#E6AC00] transition-colors"
                    >
                      Click Here If Not Opened Automatically
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-[#1F2937] text-slate-300 font-medium text-xs hover:bg-[#374151] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1F2937]">
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#FFBF00]" /> Collaboration Request
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Routes to danielmurphy02830@gmail.com</span>
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
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
                        placeholder="e.g. AI Startup / Platform"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                      />
                    </div>

                    {/* Collaboration Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Topic / Category
                      </label>
                      <select
                        name="collabType"
                        value={formData.collabType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-sm text-white focus:outline-none focus:border-slate-500 transition-colors"
                      >
                        {COLLABORATION_TYPES.map((t) => (
                          <option key={t.id} value={t.id} className="bg-[#111827] text-white">
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
                      placeholder="e.g. Review request for our new AI coding tool"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
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
                      placeholder="Share details about your product, timeline, or collaboration proposal..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FFBF00] hover:bg-[#E6AC00] text-black font-bold text-sm shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Formatting inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Dan Murphy</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Direct inquiries reach <strong className="text-slate-400">{BRAND_INFO.contactEmail}</strong>.
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
