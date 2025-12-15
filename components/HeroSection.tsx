import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroSectionProps {
  onStartCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartCheckout }) => {
  return (
    <section className="w-full bg-amy-lightBlue pt-12 pb-20 md:pt-24 md:pb-32 px-6 lg:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="md:col-span-7 z-10 relative">
            
            {/* Super header */}
            <p className="text-amy-orange font-bold tracking-widest uppercase text-sm mb-4">
                WEEKLY CALM ANCHOR
            </p>

            {/* Hook / Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-amy-navy leading-[1.05] mb-6 font-sans">
                <span className="relative inline-block">
                  911 Reset
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amy-gold opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 101.5 0.999967 197.5 3.99998" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                </span> Wednesdays
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                ...A quiet mid-week reset for bodies that carry more than most people will ever understand.
            </p>

            {/* CTA Container with Arrow */}
            <div className="relative inline-block mt-4">
                {/* Hand drawn arrow pointing to button - Positioned ABOVE */}
                <div className="absolute -top-14 left-0 w-32 hidden md:block">
                     <p className="font-script text-xl text-amy-navy mb-1 ml-4 rotate-[-6deg]">Start here!</p>
                     <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amy-navy w-10 h-10 ml-8 transform rotate-90">
                        <path d="M10 25 C 20 25, 35 25, 50 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M50 25 L 40 18 M 50 25 L 40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>

                <button 
                    onClick={onStartCheckout}
                    className="bg-amy-orange hover:bg-orange-600 text-white font-bold py-5 px-10 rounded text-lg shadow-amy hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                    Save your seat
                </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 opacity-90">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs text-slate-500 overflow-hidden">
                            {/* Placeholder for small avatars */}
                            <UserIcon />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="flex text-amy-gold">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <p className="text-slate-600 text-sm font-medium italic">
                        "The first time in years my body actually let go."
                    </p>
                </div>
            </div>
        </div>

        {/* Right Column: Photo Cutout Style */}
        <div className="md:col-span-5 relative mt-12 md:mt-0">
            {/* Blob Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amy-gold/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Photo Placeholder - Pill Shape for Amy Style */}
            <div className="aspect-[3/4] bg-white rounded-t-[10rem] rounded-b-[2rem] shadow-2xl overflow-hidden relative border-8 border-white">
                 <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 font-semibold text-lg text-center p-8">
                     [INSERT IMAGE:<br/>Tim Smiling,<br/>Warm Lighting]
                 </div>
                 {/* <img src="/path/to/tim.jpg" alt="Tim smiling" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block rotate-[-3deg]">
                <p className="font-script text-2xl text-amy-navy leading-none mb-1">Weekly Reset</p>
                <p className="text-xs text-slate-500 font-sans uppercase tracking-wider font-bold">Live + Replays</p>
            </div>
        </div>

      </div>
    </section>
  );
};

const UserIcon = () => (
    <svg className="w-full h-full text-slate-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);