import React from 'react';
import { Award, Mic, Users, Sparkles } from 'lucide-react';
import { DAN_GALLERY } from '../data/content';

export const SpeakingGallery: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0F19] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <div className="text-xs font-mono text-[#FFBF00] uppercase tracking-wider font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In The Community</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Speaking, Recognition & Key Moments
            </h3>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Keynote Presentations &bull; NI Tech Awards Finalist &bull; Industry Panels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DAN_GALLERY.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-[#1F2937] hover:border-slate-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#090D16]">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#111827] space-y-1">
                <span className="text-[10px] font-mono text-[#FFBF00] uppercase font-bold tracking-wider">
                  {photo.category}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors">
                  {photo.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
