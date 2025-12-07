import React from 'react';
import { Mail, Calendar, Clock } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 pt-20 pb-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Contact/FAQ */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Have Questions?</h3>
            <div className="flex items-center justify-center gap-2 text-lg text-slate-600">
                <Mail className="w-5 h-5 text-teal-600" />
                <span>Email <span className="font-bold text-slate-900">tim@thecalmanchor.com</span> — I’m here for you.</span>
            </div>
        </div>

        {/* Session Info */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Session Times</h3>
            
            <div className="flex flex-col items-center gap-2 mb-6">
                <div className="flex items-center gap-2 text-xl font-semibold text-teal-700">
                    <Calendar className="w-6 h-6" />
                    <span>Wednesdays</span>
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold text-slate-800">
                    <Clock className="w-6 h-6" />
                    <span>9:00 pm Atlantic Time (AST)</span>
                </div>
            </div>

            <p className="text-slate-600">
                If you can’t be there live, it’s okay. <br/>
                Many members only watch the replay and feel the same release.
            </p>
        </div>

        {/* Final CTA Block */}
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Join us for our next session...</h2>
            
            {/* Mock Countdown Timer Visual */}
            <div className="flex justify-center gap-4 mb-10">
                {['02', '14', '35'].map((num, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 rounded-lg flex items-center justify-center text-white text-3xl font-mono shadow-md">
                            {num}
                        </div>
                        <span className="text-xs uppercase text-slate-500 mt-2 font-semibold">
                            {['Hours', 'Mins', 'Secs'][i]}
                        </span>
                    </div>
                ))}
            </div>

            <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                JOIN 911 RESET WEDNESDAYS
            </button>
        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-200 pt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Weekly Reset</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Login</a>
        </div>
        <div className="mt-4 text-xs text-slate-400">
            &copy; 2025 The Calm Anchor
        </div>

      </div>
    </section>
  );
};