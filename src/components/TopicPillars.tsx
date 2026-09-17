import React from 'react';
import { 
  Code2, 
  Video, 
  Sparkles, 
  Cpu, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { TOPIC_PILLARS, Topic } from '../data/content';

const getIcon = (iconName: Topic['iconName']) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-6 h-6 text-purple-400" />;
    case 'Video':
      return <Video className="w-6 h-6 text-cyan-400" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-yellow-400" />;
    case 'Cpu':
    default:
      return <Cpu className="w-6 h-6 text-emerald-400" />;
  }
};

export const TopicPillars: React.FC = () => {
  return (
    <section id="topics" className="py-20 relative bg-[#090e1c] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            What We Explore
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Coverage & Deep Dives
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From hands-on coding demonstrations to synthetic video benchmarks, we analyze how tomorrow&apos;s tech solves today&apos;s real-world problems.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOPIC_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent border top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Coverage Areas:
                </span>
                {pillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
