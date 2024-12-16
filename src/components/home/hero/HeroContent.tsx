import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
import { MotionDiv } from '../../ui/motion';

export function HeroContent() {
  const navigate = useNavigate();

  return (
    <MotionDiv
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-start"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-6 flex flex-wrap items-center gap-x-4">
        <span className="text-white">Maximize Your</span>
        <span className="text-gold-500">Savings</span>
        <span className="text-white">with the</span>
        <span className="text-gold-500">Perfect Card</span>
      </h1>
      
      <p className="mt-6 text-lg text-gold-500/80 max-w-xl">
        MaxxMAI uses AI-driven insights to help you unlock rewards tailored to your lifestyle
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-sm">
        <Button 
          size="xl" 
          className="group w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => navigate('/profile')}
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          variant="outline" 
          size="xl"
          className="group w-full sm:w-auto border-gold-500/20 hover:border-gold-500/40 backdrop-blur-sm"
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
          <PlayCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </MotionDiv>
  );
}