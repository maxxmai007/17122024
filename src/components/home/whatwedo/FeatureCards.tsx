import React from 'react';
import { NetworkGraph } from '../graphs/NetworkGraph';
import { Timeline } from '../timeline/Timeline';
import { NotificationCard } from './NotificationCard';

const features = [
  {
    title: 'Thousands of Cards',
    description: 'We analyze the terms and benefits of almost 4,000 credit cards and dozens of issuers every day',
    content: <NetworkGraph />
  },
  {
    title: 'Hyper Personalization',
    description: 'We understand your goals and spending patterns, enabling optimally timed card recommendations',
    content: <NotificationCard />
  },
  {
    title: 'Your Partner Over Time',
    description: 'Our algorithm optimizes your rewards over time, so you never have to think about which card to get again',
    content: <Timeline />
  }
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group relative rounded-2xl p-8 bg-gradient-to-b from-dark-800/50 to-dark-900/50 border border-gold-500/10 hover:border-gold-500/20 transition-all duration-300"
        >
          <div className="aspect-[4/3] mb-8 rounded-lg overflow-hidden bg-dark-900/80 border border-gold-500/5">
            {feature.content}
          </div>
          
          <h4 className="text-xl text-white mb-3">
            {feature.title}
          </h4>
          
          <p className="text-gold-500/80 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}