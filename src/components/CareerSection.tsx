import React from 'react';
import { ExternalLink, Briefcase, ChevronRight } from 'lucide-react';
import { CAREER_HISTORY, BRAND_INFO } from '../data/content';
import { LinkedinIcon } from './Icons';

export const CareerSection: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-[#0B0F19] border-t border-[#1F2937] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FFBF00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header / Yellow Marker Badge */}
        <div className="text-center sm:text-left mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block bg-[#FFBF00] text-black font-black uppercase tracking-widest text-sm sm:text-base px-3.5 py-1 rounded-sm shadow-md font-mono transform -rotate-1 hover:rotate-0 transition-transform">
              CAREERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            20+ Years in Tech, SRE & AI Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            From early days on the service desk to Head of SRE at PwC and founding TalkTechToMe – a timeline of engineering, scaling, and architectural leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          <div className="space-y-12 sm:space-y-16">
            {CAREER_HISTORY.map((item, index) => (
              <div 
                key={item.id}
                className="relative grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start group"
              >
                
                {/* Left: Date Period */}
                <div className="sm:col-span-3 text-left sm:text-right pt-0.5">
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                    {item.period}
                  </span>
                </div>

                {/* Center: Vertical Line with Node */}
                <div className="hidden sm:flex sm:col-span-1 justify-center relative h-full">
                  {/* Vertical rule that connects items */}
                  {index !== CAREER_HISTORY.length - 1 && (
                    <div className="absolute top-6 bottom-[-4rem] w-[2px] bg-[#1F2937] group-hover:bg-slate-700 transition-colors" />
                  )}
                  {/* Hollow node circle */}
                  <div className="relative z-10 w-4 h-4 rounded-full border-2 border-slate-500 group-hover:border-[#FFBF00] bg-[#0B0F19] mt-1 transition-all group-hover:scale-125 shadow-sm" />
                </div>

                {/* Right: Content Card / Details */}
                <div className="sm:col-span-8 pl-4 sm:pl-0 border-l-2 sm:border-l-0 border-[#1F2937] space-y-2">
                  
                  {/* Role Title & Company */}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role} <span className="text-slate-300 font-semibold">@ {item.company}</span>
                    </h3>
                    {item.employmentType && (
                      <span className="text-xs text-slate-400 font-normal">
                        {item.employmentType}
                      </span>
                    )}
                  </div>

                  {/* Location & Website URL */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>{item.location}</span>
                    {item.url && (
                      <>
                        <span className="text-slate-600">|</span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400/90 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1 transition-colors"
                        >
                          {item.url.replace(/^https?:\/\//, '')}
                          <ExternalLink className="w-3 h-3 inline opacity-70" />
                        </a>
                      </>
                    )}
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* LinkedIn Outbound CTA */}
        <div className="mt-16 pt-8 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111827] p-6 rounded-2xl border border-[#1F2937]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shrink-0">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Professional Trajectory on LinkedIn</h4>
              <p className="text-xs text-slate-400">View enterprise endorsements, speaking engagements, and recommendations.</p>
            </div>
          </div>

          <a
            href={BRAND_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F2937] hover:bg-[#374151] text-white border border-slate-700 font-semibold text-xs transition-all active:scale-95 shrink-0"
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
