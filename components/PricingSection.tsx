import React from 'react';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onStartCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onStartCheckout }) => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Ticket Style Container */}
        <div className="relative bg-amy-lightBlue rounded-[2rem] p-8 md:p-16 border-2 border-dashed border-amy-navy/30">
            
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-amy-gold text-amy-navy font-bold px-8 py-3 rounded-full shadow-lg uppercase tracking-wider text-sm">
                The Full Access Pass
            </div>

            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-amy-navy mb-4">
                    Join 911 Reset Wednesdays
                </h2>
                <p className="text-xl text-slate-600">
                    A steady place to land each week.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    {[
                        "Live 60-min Weekly Session",
                        "Full Replay Library",
                        "Weekly 'Pocket Tools'",
                        "Community Connection",
                        "Calm Anchor Guarantee"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-amy-orange text-white flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4" />
                            </div>
                            <span className="text-lg text-amy-navy font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
                    <p className="text-slate-500 font-bold uppercase text-xs mb-2 tracking-widest">Monthly Membership</p>
                    <div className="text-6xl font-extrabold text-amy-navy mb-2">
                        $47
                    </div>
                    <p className="text-slate-400 text-sm mb-8">per month • cancel anytime</p>
                    
                    <button 
                        onClick={onStartCheckout}
                        className="w-full bg-amy-navy hover:bg-slate-800 text-white font-bold py-4 px-6 rounded shadow-lg transition-transform hover:-translate-y-1"
                    >
                        JOIN NOW
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center border-t border-slate-200 pt-8">
                <p className="text-slate-600 italic font-medium">
                    "If you don't feel a shift, you don't pay. That's the Calm Anchor Guarantee."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};