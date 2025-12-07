import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Primary Hero Block */}
      <div className="w-full max-w-4xl px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          911 RESET WEDNESDAYS
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          A weekly grounding space for people who carry too much and never get a moment to breathe.
        </p>

        {/* Social Proof Quote */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-10 bg-teal-50/50 p-6 rounded-xl border border-teal-100">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-lg italic text-slate-700">
            “The first time in years my body actually let go.”
          </blockquote>
          <cite className="text-sm font-semibold text-teal-700 not-italic uppercase tracking-wider">
            — ER Nurse
          </cite>
        </div>

        <button className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 mx-auto text-lg">
          JOIN 911 RESET WEDNESDAYS
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Problem / Agitation Block */}
      <div className="w-full bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            This Is Why You Don’t Feel Ready
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              It’s not because you need to “shake it off” or push harder. <br />
              It’s because you’ve been trying to come down from high alert <span className="font-bold text-slate-900">in isolation</span>.
            </p>
            <p>
              Frontline work was never meant to be processed alone. When you’re by yourself, every spike of tension feels like something is wrong with you.
            </p>
            <p className="font-medium text-teal-800">
              But when you’re in a steady circle of people who understand the load?
            </p>
            <ul className="list-none space-y-2 pl-4 border-l-4 border-teal-200">
              <li>Your breath deepens.</li>
              <li>Your shoulders drop.</li>
              <li>Your system remembers how to settle.</li>
            </ul>
          </div>

          {/* Secondary Social Proof */}
          <div className="mt-16 text-center">
             <div className="flex justify-center space-x-2 mb-4 text-slate-900">
                <Star className="w-6 h-6 fill-black" />
                <Star className="w-6 h-6 fill-black" />
                <Star className="w-6 h-6 fill-black" />
                <Star className="w-6 h-6 fill-black" />
                <Star className="w-6 h-6 fill-black" />
             </div>
             <p className="text-xl font-medium text-slate-800 mb-4">
               “The reset I feel in my body after these sessions is unlike anything I can do on my own.”
             </p>
             <p className="text-slate-500 font-medium uppercase text-sm tracking-wide">
               — Emergency Department Nurse
             </p>
             
             <div className="mt-8">
               <button className="text-teal-700 font-bold border-b-2 border-teal-700 hover:text-teal-900 hover:border-teal-900 transition-colors">
                 JOIN 911 RESET WEDNESDAYS NOW
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};