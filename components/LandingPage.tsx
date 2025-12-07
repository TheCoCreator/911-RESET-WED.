import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { PricingSection } from './PricingSection';
import { FinalCTASection } from './FinalCTASection';
import { Anchor } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Simple Navigation/Brand Header */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-center border-b border-slate-200 bg-white">
        <div className="flex items-center gap-2 text-slate-800 font-semibold tracking-wide">
          <Anchor className="w-6 h-6 text-teal-700" />
          <span>THE CALM ANCHOR</span>
        </div>
      </nav>

      {/* Page Sections */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-slate-400 text-sm bg-slate-900 mt-auto">
        <p>&copy; {new Date().getFullYear()} The Calm Anchor. All rights reserved.</p>
      </footer>
    </div>
  );
};