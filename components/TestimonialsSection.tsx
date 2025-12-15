import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I’ve been carrying stress in my body for so long that I forgot what real calm felt like. During the session something shifted. It wasn’t fake calm. It was real. And that night I slept for the first time in a long time.",
      author: "Angela, CCA"
    },
    {
      quote: "I felt calm for the first time in a long time. I actually slept after the session.",
      author: "Wendy, HSA"
    },
    {
      quote: "My shoulders dropped and my chest loosened. I felt lighter.",
      author: "Angela, CCA"
    },
    {
      quote: "It was the first time in months my body wasn’t on high alert.",
      author: "S. K., Continuing Care Nurse"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-amy-navy text-center mb-20">
            Real Stories from the Frontline
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="flex mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-amy-gold fill-amy-gold" />
                        ))}
                    </div>
                    <p className="text-xl text-slate-700 italic mb-8 leading-relaxed font-serif">
                        “{t.quote}”
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amy-navy rounded-full text-white flex items-center justify-center font-bold">
                            {t.author.charAt(0)}
                        </div>
                        <p className="font-bold text-amy-navy uppercase tracking-wider text-sm">
                            {t.author}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};