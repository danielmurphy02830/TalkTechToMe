import React from 'react';
import { 
  Tv, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Video, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient glowing radial orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines and Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>talktechtome.co.uk &bull; Official Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Exploring The Frontier Of{' '}
              <span className="text-gradient">AI Tools</span> & Modern Tech
            </h1>

            {/* Sub-headline from Dan's description */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome! I&apos;m <strong className="text-white font-semibold">{BRAND_INFO.creator}</strong>. 
              We break down the cutting-edge software shaping our future – from deep dives into 
              text-to-video apps like <span className="text-cyan-400 font-medium">Synthesia</span> to 
              AI coding assistants like <span className="text-purple-400 font-medium">Cursor</span>.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero-Fluff Reviews</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Hands-on Code & Demos</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pricing & ROI Analysis</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all active:scale-95"
              >
                <Tv className="w-4 h-4" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={BRAND_INFO.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 shadow-md transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Read Newsletter</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="#collaborate"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
              >
                <span>Collaborate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-tech Visual Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 opacity-30 blur-lg transition duration-1000 group-hover:opacity-60" />
              
              <div className="relative rounded-2xl bg-[#0d1424] border border-slate-800/90 shadow-2xl overflow-hidden">
                
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>talktechtome-eval.sh</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    LIVE
                  </span>
                </div>

                {/* Simulated Tech Evaluation Console */}
                <div className="p-5 font-mono text-xs space-y-4">
                  
                  {/* Console line 1 */}
                  <div className="space-y-1">
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400">$</span>
                      <span>inspect-tool --target=Synthesia</span>
                    </div>
                    <div className="pl-4 py-2 bg-slate-900/80 rounded-lg border border-slate-800 text-slate-300 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Category:</span>
                        <span className="text-cyan-300 font-semibold">Generative AI Video / Avatars</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Key Feature:</span>
                        <span className="text-slate-200">Custom Studio Avatars & Voice Clone</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Verdict:</span>
                        <span className="text-emerald-400 font-semibold">Production Ready for Enterprise</span>
                      </div>
                    </div>
                  </div>

                  {/* Console line 2 */}
                  <div className="space-y-1">
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-purple-400">$</span>
                      <span>benchmark --ide=Cursor</span>
                    </div>
                    <div className="pl-4 py-2 bg-slate-900/80 rounded-lg border border-slate-800 text-slate-300 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Model Engine:</span>
                        <span className="text-purple-300 font-semibold">Claude 3.5 Sonnet / Composer</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Coding Speedup:</span>
                        <span className="text-emerald-400 font-semibold">+3.8x refactoring velocity</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Card in Console */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                        Next Deep Dive Drops Weekly
                      </span>
                      <span className="text-slate-500">talktechtome.co.uk</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full w-4/5 rounded-full" />
                    </div>
                  </div>

                </div>

                {/* Footer badge */}
                <div className="px-5 py-3 bg-[#0a0f1d] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-300">Host: GCP Cloud Run</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">London, UK</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
