import React from 'react';
import { 
  Box, 
  Terminal, 
  User, 
  Building2, 
  ExternalLink,
  CheckCircle2,
  Play
} from 'lucide-react';
import { BRAND_INFO, HF_DAN_ACTIVITY, PYTHON_BENCHMARK_SNIPPET } from '../data/content';

export const HubFeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0F19] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1F2937] flex items-center justify-center mx-auto text-cyan-400">
            <Box className="w-5 h-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Hub of Practical AI Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Discover, evaluate, and benchmark generative software with zero fluff.
          </p>
        </div>

        {/* Two Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Card: The Collaboration Platform / Activity Feed */}
          <div className="lg:col-span-6 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                The evaluation platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Explore real-world test results, tool post-mortems, and creator benchmarks.
              </p>
            </div>

            {/* Inner UI Simulation: User Profile & Feed */}
            <div className="rounded-xl bg-[#0B0F19] border border-[#1F2937] p-4 sm:p-5 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                
                {/* Left Mini Sidebar */}
                <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-[#1F2937] pb-3 sm:pb-0 sm:pr-3 space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/media/main-image.jpg" 
                      alt="Dan Murphy" 
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-[#FFBF00]/50" 
                    />
                    <div>
                      <div className="font-mono text-white text-xs font-semibold">danielmurphy</div>
                      <div className="text-[10px] text-slate-500">Creator</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1F2937] space-y-1.5 text-[11px] text-slate-400 font-mono">
                    <div className="text-slate-500 uppercase text-[9px] tracking-wider">Affiliations</div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>TalkTechToMe</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Head of SRE @ PwC</span>
                    </div>
                  </div>
                </div>

                {/* Right Activity Column */}
                <div className="sm:col-span-8 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-[#1F2937]">
                    <span className="font-semibold text-white">Dan Murphy&apos;s Activity</span>
                    <span className="text-[10px] font-mono text-emerald-400">● Live Updates</span>
                  </div>

                  <div className="space-y-2">
                    {HF_DAN_ACTIVITY.map((act, idx) => (
                      <div 
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#111827] border border-[#1F2937] text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="text-cyan-400 font-medium">{act.action}</span>
                          <span className="text-slate-500 text-[10px]">{act.time}</span>
                        </div>
                        <div className="font-mono text-[11px] text-white font-semibold">
                          {act.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#1F2937] flex items-center justify-between text-xs text-slate-400">
              <span>All evaluations tested in production</span>
              <a href="#about" className="text-cyan-400 hover:underline">About Dan Murphy &rarr;</a>
            </div>
          </div>

          {/* Right Card: Move Faster / Python Benchmark Code Box */}
          <div className="lg:col-span-6 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                Move faster with empirical testing
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Rigorous testing frameworks comparing AI coding velocity, avatar generation, and token accuracy.
              </p>
            </div>

            {/* Python Code Window */}
            <div className="rounded-xl bg-[#090D16] border border-[#1F2937] overflow-hidden shadow-inner">
              <div className="flex items-center justify-between px-4 py-2 bg-[#0B0F19] border-b border-[#1F2937] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px]">benchmark_cursor.py</span>
                </div>
                <span className="text-[10px] text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                  Python 3.12
                </span>
              </div>

              <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-slate-500"># Benchmark AI coding assistants with TalkTechToMe</span>{'\n'}
                  <span className="text-purple-400">from</span> talktechtome <span className="text-purple-400">import</span> BenchmarkRunner{'\n\n'}
                  runner = BenchmarkRunner({'\n'}
                  {'    '}target=<span className="text-emerald-300">&quot;cursor-composer&quot;</span>,{'\n'}
                  {'    '}model=<span className="text-emerald-300">&quot;claude-3.5-sonnet&quot;</span>{'\n'}
                  ){'\n\n'}
                  <span className="text-slate-500"># Run multi-file refactoring suite</span>{'\n'}
                  results = runner.evaluate([<span className="text-emerald-300">&quot;fullstack_migration&quot;</span>]){'\n'}
                  <span className="text-blue-400">print</span>(<span className="text-emerald-300">f&quot;Velocity: +&#123;results.velocity_gain&#125;x&quot;</span>){'\n'}
                  <span className="text-slate-500"># Output: Velocity: +3.8x | Accuracy: 99.4%</span>
                </code>
              </pre>
            </div>

            <div className="pt-4 mt-4 border-t border-[#1F2937] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">Suite: Multi-File Agentic Benchmarks</span>
              <a 
                href={BRAND_INFO.socials.substack} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FFBF00] hover:underline"
              >
                Read Benchmark Post &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
