import React from 'react';
import { 
  Video, 
  Code2, 
  Mic, 
  Terminal, 
  Coins, 
  Cpu, 
  Image, 
  Workflow, 
  ExternalLink,
  ShieldCheck,
  Award,
  Globe
} from 'lucide-react';
import { HF_MODALITIES, BRAND_INFO, DAN_GALLERY } from '../data/content';
import { LinkedinIcon } from './Icons';

const getModalityIcon = (iconName: string) => {
  switch (iconName) {
    case 'Video':
      return <Video className="w-5 h-5 text-cyan-400" />;
    case 'Code2':
      return <Code2 className="w-5 h-5 text-purple-400" />;
    case 'Mic':
      return <Mic className="w-5 h-5 text-emerald-400" />;
    case 'Terminal':
      return <Terminal className="w-5 h-5 text-amber-400" />;
    case 'Coins':
      return <Coins className="w-5 h-5 text-yellow-400" />;
    case 'Image':
      return <Image className="w-5 h-5 text-pink-400" />;
    case 'Workflow':
      return <Workflow className="w-5 h-5 text-blue-400" />;
    case 'Cpu':
    default:
      return <Cpu className="w-5 h-5 text-indigo-400" />;
  }
};

export const ModalitiesAndProfile: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B0F19] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Card: Explore All Modalities */}
          <div className="lg:col-span-6 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Explore all modalities
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Text, code, video, speech, and agentic workflows shaping modern software.
              </p>

              {/* Modality Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {HF_MODALITIES.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-3.5 rounded-xl bg-[#0E1526] border border-[#1F2937] hover:border-slate-600 transition-all group flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#111827] border border-[#1F2937] group-hover:scale-105 transition-transform shrink-0">
                      {getModalityIcon(mod.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {mod.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500">
                        {mod.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1F2937] flex items-center justify-between text-xs text-slate-400">
              <span>Full coverage across multimodal stacks</span>
              <a href="#trending" className="text-cyan-400 hover:underline">View All &rarr;</a>
            </div>
          </div>

          {/* Right Card: Hugging Face Style Creator Profile */}
          <div className="lg:col-span-6 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Creator Profile
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    20+ year technical trajectory in SRE, cloud architectures, and AI.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#FFBF00] text-black font-black text-xs font-mono">
                  PRO
                </span>
              </div>

              {/* Profile Card Container */}
              <div className="p-5 rounded-xl bg-[#0E1526] border border-[#1F2937] space-y-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src="/media/main-image.jpg"
                      alt="Dan Murphy"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[#FFBF00] shadow-md shrink-0"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#111827]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white">{BRAND_INFO.creator}</h4>
                      <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-500/30">
                        FOUNDER
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">@{BRAND_INFO.username}</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Head of SRE @ PwC &bull; Founder of TalkTechToMe
                    </p>
                  </div>
                </div>

                {/* Bio text excerpt */}
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Exploring the exciting world of AI tools, text-to-video (Synthesia), and AI coding assistants (Cursor). Sharing clear insights into the software shaping our future.
                </p>

                {/* Organizations & Affiliations */}
                <div className="pt-3 border-t border-[#1F2937] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">Org:</span>
                    <span className="text-slate-200">TalkTechToMe</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">Corporate:</span>
                    <span className="text-slate-200">PwC (Head of SRE)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">Domain:</span>
                    <span className="text-cyan-400">talktechtome.co.uk</span>
                  </div>
                </div>

                {/* Profile Links row */}
                <div className="pt-3 border-t border-[#1F2937] flex flex-wrap items-center gap-3">
                  <a
                    href={BRAND_INFO.socials.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#161F33] text-xs font-medium text-slate-300 hover:text-white border border-[#1F2937] transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>danmurphy.life</span>
                  </a>

                  <a
                    href={BRAND_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#161F33] text-xs font-medium text-slate-300 hover:text-white border border-[#1F2937] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>

              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#1F2937] flex items-center justify-between text-xs text-slate-400">
              <span>Verified Creator & Speaker</span>
              <a href="#career" className="text-[#FFBF00] hover:underline">View Full Career &rarr;</a>
            </div>
          </div>

        </div>

        {/* Media & Speaking Highlights Gallery */}
        <div className="mt-14 pt-10 border-t border-[#1F2937]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <div className="text-xs font-mono text-[#FFBF00] uppercase tracking-wider font-semibold">
                In The Community
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Speaking, Recognition & Industry Moments
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Keynotes &bull; Tech Awards &bull; Publications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DAN_GALLERY.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-xl overflow-hidden bg-[#111827] border border-[#1F2937] hover:border-slate-600 transition-all shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#090D16]">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 bg-[#111827] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#FFBF00] uppercase font-semibold">
                      {photo.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors">
                    {photo.caption}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
