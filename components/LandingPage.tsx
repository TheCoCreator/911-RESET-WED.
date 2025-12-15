import React from 'react';
import { HeroSection } from './HeroSection';
import { PromiseSection } from './PromiseSection';
import { WhatYouGetSection } from './WhatYouGetSection';
import { StorySection } from './StorySection';
import { HowItWorksSection } from './HowItWorksSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { FinalCTASection } from './FinalCTASection';
import { Anchor } from 'lucide-react';

interface LandingPageProps {
  onStartCheckout: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartCheckout }) => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Navigation */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm/50 backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-2 text-amy-navy font-bold tracking-wide cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-amy-navy text-white flex items-center justify-center rounded-full">
             <Anchor className="w-5 h-5" />
          </div>
          <span className="font-sans font-extrabold tracking-tight">TIM CAMPBELL</span>
        </div>

        <div className="flex items-center gap-6">
            <button 
                onClick={onStartCheckout}
                className="hidden md:block bg-amy-orange hover:bg-orange-600 text-white text-sm font-bold py-2 px-6 rounded shadow-md transition-all"
            >
                JOIN NOW
            </button>
        </div>
      </nav>

      <main>
        <HeroSection onStartCheckout={onStartCheckout} />
        <PromiseSection />
        <WhatYouGetSection />
        <StorySection />
        <HowItWorksSection />
        <PricingSection onStartCheckout={onStartCheckout} />
        <FAQSection />
        <FinalCTASection onStartCheckout={onStartCheckout} />
      </main>

      <footer className="w-full py-12 text-center text-slate-400 text-sm bg-amy-navy mt-auto border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} The Calm Anchor. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
            <button className="hover:text-white transition-colors">Admin</button>
        </div>
      </footer>
    </div>
  );
};