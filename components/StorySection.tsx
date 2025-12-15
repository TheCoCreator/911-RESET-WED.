import React from 'react';
import { User } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Tim's Photo Placeholder */}
        <div className="w-full md:w-1/2 lg:w-5/12">
             {/* USER: Paste your image URL in the src below. */}
            <div className="aspect-[3/4] bg-slate-100 rounded-[2rem] shadow-xl overflow-hidden relative flex items-center justify-center border-8 border-white ring-1 ring-slate-100">
                 <span className="text-slate-400 font-medium px-6 text-center text-lg">
                     [Tim's Photo Here]
                 </span>
                 {/* <img src="/path/to/tim.jpg" alt="Tim" className="w-full h-full object-cover" /> */}
            </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-1/2 lg:w-7/12">
            <div className="inline-flex items-center gap-2 text-amy-orange font-bold uppercase tracking-wider text-sm mb-6 bg-orange-50 px-4 py-2 rounded-full">
                <User className="w-4 h-4" />
                Meet Your Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amy-navy mb-8">
                Hi, I'm Tim.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                    I’ve spent years working with people whose bodies needed to stand down and teaching them how.
                </p>
                <p>
                    I know the eyes that keep scanning, the tension that locks people in place, and what it takes to get unstuck in the moment.
                </p>
                <p>
                    I’ve watched that calm return when it mattered most.
                </p>

                {/* TRUST BUILDER QUOTE */}
                <div className="bg-amy-lightBlue border-l-4 border-amy-navy p-6 rounded-r-xl my-8 shadow-sm">
                    <p className="font-serif italic text-amy-navy text-xl leading-relaxed">
                        "An ER Doctor pulled me aside and said: 'You need to learn hypnosis. You're already doing half of it.'"
                    </p>
                </div>

                <p>
                    That’s why I created <span className="font-semibold text-amy-navy">911 Reset Wednesdays</span>. A weekly moment where your system learns, gently and consistently, that it doesn’t have to stay on high alert forever.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};