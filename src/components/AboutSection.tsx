import { 
  Globe, 
  BookOpen, 
  Bookmark, 
  Tv, 
  ExternalLink, 
  Award, 
  ShieldCheck, 
  Zap, 
  Terminal,
  UserCheck
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { BRAND_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#090e1c] border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -left-20 bottom-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card & Quick Stats */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 opacity-25 blur-lg" />
              
              <div className="relative rounded-3xl bg-[#0c1326] border border-slate-800 p-8 text-center space-y-6">
                
                {/* Avatar / Monogram */}
                <div className="relative mx-auto w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 p-1 shadow-xl shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#080d1a] rounded-[22px] flex items-center justify-center flex-col">
                    <span className="text-3xl font-black text-white tracking-wider">DM</span>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-0.5">TALKTECH</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-black p-1.5 rounded-full ring-4 ring-[#0c1326]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-2xl font-black text-white">{BRAND_INFO.creator}</h3>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    Creator & Tech Explorer &bull; {BRAND_INFO.name}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    talktechtome.co.uk
                  </p>
                </div>

                {/* Direct Link Badges */}
                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2.5">
                  <a
                    href={BRAND_INFO.socials.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-xs font-semibold text-slate-200 border border-slate-700 transition-all hover:text-cyan-300"
                  >
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>danmurphy.life</span>
                  </a>

                  <a
                    href={BRAND_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-xs font-semibold text-slate-200 border border-slate-700 transition-all hover:text-blue-400"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                {/* Platform Summary Pill */}
                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-left">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Active Platforms:</span>
                    <span className="text-cyan-400 font-mono text-[11px]">4 Channels</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-xs">
                    <span className="flex items-center gap-1"><Tv className="w-3 h-3 text-red-400" /> YouTube</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3 text-orange-400" /> Substack</span>
                    <span className="flex items-center gap-1"><Bookmark className="w-3 h-3 text-emerald-400" /> Medium</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Behind TalkTechToMe
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Clear Insights into the Software Shaping Our Future
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Welcome! I&apos;m <strong>Dan Murphy</strong>, and here we explore the exciting world of AI tools and modern technology. From deep dives into text-to-video apps like <strong>Synthesia</strong> and AI coding assistants like <strong>Cursor</strong>, to practical demos and honest reviews – we break down how these tools work, their features, pricing, and real-world applications.
              </p>
              <p>
                Whether you&apos;re a creator, developer, marketer, or just tech-curious, subscribe for clear insights into the software shaping our future. Every piece of content is built from firsthand testing, code experimentation, and zero-fluff analysis.
              </p>
            </div>

            {/* Core Values / Review Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Uncompromised Honesty</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clear, unbiased appraisals. We highlight what works, what falls short, and hidden pricing gotchas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-1.5">
                  <Zap className="w-4 h-4" />
                  <span>Hands-On Verification</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real implementations, code walkthroughs, and actual render outputs rather than marketing slides.
                </p>
              </div>
            </div>

            {/* Link out row */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={BRAND_INFO.socials.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Visit danmurphy.life</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={BRAND_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
