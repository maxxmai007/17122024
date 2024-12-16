import React from 'react';
import { MotionDiv } from '../ui/motion';

const testimonials = [
  {
    quote: "MaxxMAI helped me find the perfect travel rewards card. I've already saved thousands on flights!",
    author: "Sarah J.",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    quote: "The AI-powered recommendations were spot-on. Finally found a card that matches my spending habits.",
    author: "Michael R.",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    quote: "Incredible how quickly I got personalized card recommendations. The process was seamless!",
    author: "Emily T.",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-white mb-4">What Our Users Say</h2>
          <p className="text-gold-500/80">Join thousands of satisfied users who found their perfect card</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 p-6 rounded-2xl border border-gold-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gold-500/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gold-500/80 italic">"{testimonial.quote}"</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}