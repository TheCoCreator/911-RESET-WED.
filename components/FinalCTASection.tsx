import React from 'react';

interface FinalCTASectionProps {
  onStartCheckout: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onStartCheckout }) => {
  return (
    <section className="w-full bg-amy-navy text-white py-32 px-6 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amy-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-serif">
            Imagine a few short weeks from now...
        </h2>
        
        <div className="space-y-6 text-xl md:text-2xl text-blue-100 mb-12 font-light">
            <p>Shoulders dropped.</p>
            <p>Jaw unclenched.</p>
            <p>Walking into your home without carrying the shift with you.</p>
        </div>

        <button 
            onClick={onStartCheckout}
            className="bg-amy-gold hover:bg-white hover:text-amy-navy text-amy-navy font-bold py-5 px-16 rounded text-xl shadow-2xl transition-all transform hover:-translate-y-1 inline-block"
        >
            YES, I WANT THIS
        </button>

        <p className="mt-12 text-amy-orange font-script text-3xl transform -rotate-2">
            You deserve a place to land.
        </p>
      </div>
    </section>
  );
};