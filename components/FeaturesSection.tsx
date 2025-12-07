import React from 'react';
import { CheckCircle2, Video } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* What Changes Section */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            Here’s What Changes When You Stop Doing This Alone
            </h2>
            
            <ul className="space-y-6">
            {[
                { title: "You receive a guided Calm Anchor session", desc: "your body shifts from wired to grounded." },
                { title: "Replay access", desc: "the reset is always waiting when you need it." },
                { title: "One new Calm Anchor each week", desc: "real-world tools for on shift, in the car, or before bed." },
                { title: "A circle of people who get the weight", desc: "support without needing to explain the job." }
            ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                    <span className="font-bold text-slate-900">{item.title}</span> — <span className="text-slate-600">{item.desc}</span>
                </div>
                </li>
            ))}
            </ul>

            <div className="mt-10 p-6 bg-slate-100 rounded-lg text-center md:text-left">
                <p className="text-lg text-slate-700 italic">
                    "This is about remembering your system can feel calm again — and letting a community hold you while it does."
                </p>
            </div>
        </div>

        {/* Connection Statement */}
        <div className="text-center mb-20 py-12 px-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Calm isn’t restored in isolation.
            </h3>
            <p className="text-xl text-teal-700 font-medium mb-8">
                It deepens in connection.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors font-semibold">
                JOIN THE RESET
            </button>
        </div>

        {/* Support Statement */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Support That’s Always There</h2>
            <p className="text-lg text-slate-600 mb-2">
                Join live when it fits, or drop into a replay whenever you need it.
            </p>
            <p className="text-lg text-slate-600">
                This isn’t another obligation on your calendar. <br />
                It’s a standing invitation to breathe, settle, and feel human again.
            </p>
        </div>

        {/* Step 1 (Start of "How It Works") */}
        <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">How It Works</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-teal-200">
                        1
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        Join live when it fits
                        <Video className="w-5 h-5 text-teal-500" />
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Wednesdays at 9pm AST, or watch the replay anytime. <br/>
                        Both create real shifts.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};