
import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { startStripeCheckout } from '../utils/payment';

interface CheckoutPageProps {
  onBack: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-50 py-12 px-6">
      <div className="max-w-5xl w-full">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-teal-700 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to overview
        </button>

        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Finish joining 911 Reset Wednesdays
          </h1>
          <p className="text-lg text-slate-600">
            A simple, secure way to reset your nervous system.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column: Details */}
          <div className="space-y-10 order-2 md:order-1">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                Here’s What Changes When You Stop Doing This Alone
              </h2>
              <ul className="space-y-4">
                {[
                  "Weekly 1-hour Calm Anchor session (live or replay)",
                  "One new Calm Anchor tool each week",
                  "Access to replays while subscribed",
                  "Supportive circle of people who understand the load"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                Price & Guarantee
              </h2>
              <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                <p className="text-2xl font-bold text-slate-900 mb-2">
                  $47/month <span className="text-base font-normal text-slate-500">• Cancel anytime</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  If you don’t notice even a small shift after your first session, you can cancel and not continue. 
                  We want this to be a relief, not a burden.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Checkout Card */}
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-8">
              <div className="flex items-center gap-3 mb-6 text-teal-800 bg-teal-50 p-4 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-semibold">Secure your spot</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to start?</h3>
              <p className="text-slate-600 mb-8">
                Payments are handled through Stripe on a secure page.
              </p>

              <button 
                onClick={startStripeCheckout}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-lg group"
              >
                <Lock className="w-5 h-5 group-hover:text-teal-200 transition-colors" />
                Continue to secure payment
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4 leading-normal">
                You’ll be taken to a secure Stripe checkout page to complete your registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
