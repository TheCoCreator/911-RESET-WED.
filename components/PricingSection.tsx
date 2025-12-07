import React from 'react';
import { Headphones, ShieldCheck, PlayCircle, Clock } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Steps 2 & 3 (Continued from Page 2) */}
        <div className="space-y-12 mb-20">
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-teal-200">
                        2
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        Receive the Calm Anchor session
                        <Headphones className="w-5 h-5 text-teal-500" />
                    </h3>
                    <p className="text-slate-600 text-lg">
                        A guided process that helps your nervous system downshift out of high alert.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-teal-200">
                        3
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        Use your weekly Calm Anchor
                        <ShieldCheck className="w-5 h-5 text-teal-500" />
                    </h3>
                    <p className="text-slate-600 text-lg mb-4">
                        Simple, discreet tools you can use between calls, after hard moments, or before bed.
                    </p>
                    <p className="text-slate-500 italic bg-slate-50 p-3 rounded inline-block">
                        "You don’t have to come every week to feel the benefits. This isn’t homework — it’s a reset you can rely on."
                    </p>
                    <div className="mt-6">
                        <button className="text-teal-700 font-bold border-b-2 border-teal-700 hover:text-teal-900 transition-colors uppercase text-sm tracking-wide">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Pricing Card */}
        <div className="w-full bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
            <div className="p-8 md:p-12 text-center border-b border-slate-700">
                <h2 className="text-3xl font-bold mb-2">911 Reset Wednesdays — Full Access</h2>
                <div className="text-5xl font-bold text-teal-400 my-6">
                    $47 <span className="text-xl text-slate-400 font-normal">/ Month</span>
                </div>
                <p className="text-slate-300 max-w-lg mx-auto">
                    Let your system settle into one grounded hour each week — and carry that calm into the rest of your life.
                </p>
            </div>
            
            <div className="p-8 md:p-12 bg-slate-800">
                <h4 className="text-xl font-semibold mb-6 text-teal-100">You Get:</h4>
                <ul className="space-y-4 mb-10">
                    {[
                        "Weekly 1-hour Calm Anchor sessions",
                        "Full access to all replays",
                        "One new Calm Anchor added each week",
                        "Support from people who understand frontline tension",
                        "Short weekly reminders to keep you steady"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-200">
                            <PlayCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg">
                    JOIN 911 RESET WEDNESDAYS NOW
                </button>
            </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 border-2 border-dashed border-slate-300 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Calm Anchor Guarantee</h3>
            <p className="text-slate-600 leading-relaxed">
                Every plan includes the Calm Anchor Guarantee. <br/>
                <span className="font-semibold text-slate-800">Cancel anytime if you’re not feeling at least 2% more settled.</span>
            </p>
        </div>

      </div>
    </section>
  );
};