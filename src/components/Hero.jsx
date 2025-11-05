import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/60 to-white dark:from-neutral-900/60 dark:via-neutral-900/60 dark:to-neutral-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Hire, Deploy, or Sell AI Agents Instantly
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
          AgentHub is the marketplace and control center for production-ready AI agents across
          marketing, support, finance, research, and security.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#marketplace" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-500 text-white font-medium shadow-lg shadow-indigo-600/20">
            Explore Agents
            <ChevronRight className="h-5 w-5" />
          </a>
          <a href="#creator" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium">
            Become a Creator
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          {[
            'Customer Support',
            'Trading',
            'Research',
            'Cybersecurity',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 rounded-full bg-white/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
