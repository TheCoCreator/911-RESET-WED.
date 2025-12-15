import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-amy-navy text-center mb-16">
            Frequently Asked Questions
        </h2>

        <div className="space-y-4">
            <FAQItem 
                question="What if I can't be hypnotized?" 
                answer="Everyone can be. People experience it differently. Some feel deeply relaxed. Some feel awake but calm. All of it works." 
            />
            <FAQItem 
                question="Will I lose control?" 
                answer="No. You stay in charge the whole time. I’m guiding, not taking over. Your system only goes where it’s ready to go." 
            />
            <FAQItem 
                question="Is this like stage hypnosis?" 
                answer="No. No acting. No weird stuff. Stage volunteers are there for entertainment. You’re here for support and ease." 
            />
             <FAQItem 
                question="Does this work on Zoom?" 
                answer="Yes. Many people relax more at home because they feel safe. All you need is a quiet spot." 
            />
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 text-left hover:text-amy-orange transition-colors group"
            >
                <span className={`font-bold text-xl ${isOpen ? 'text-amy-orange' : 'text-amy-navy'}`}>{question}</span>
                {isOpen ? <ChevronUp className="w-6 h-6 text-amy-orange" /> : <ChevronDown className="w-6 h-6 text-slate-300 group-hover:text-amy-orange" />}
            </button>
            {isOpen && (
                <div className="pb-8 text-slate-600 leading-relaxed text-lg animate-fade-in">
                    {answer}
                </div>
            )}
        </div>
    )
}