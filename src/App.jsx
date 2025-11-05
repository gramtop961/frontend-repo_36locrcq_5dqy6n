import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketplacePreview from './components/MarketplacePreview';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      <Hero />
      <MarketplacePreview />
      <section id="creator" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Become a Creator</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">Publish your own AI agents with pricing, analytics, and payouts built-in. Join a growing marketplace of developers shipping production-grade automation.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium">Add New Agent</button>
              <button className="px-5 py-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium">View Docs</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
