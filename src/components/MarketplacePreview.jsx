import React from 'react';
import { Star, DollarSign, Shield, BarChart3 } from 'lucide-react';

const agents = [
  {
    id: 'support-guru',
    name: 'SupportGuru',
    category: 'Customer Support',
    description: 'Autonomous helpdesk agent that resolves tickets and drafts replies.',
    price: '$49/mo',
    rating: 4.8,
    reviews: 182,
    badge: 'Popular',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'quant-alpha',
    name: 'QuantAlpha',
    category: 'Trading',
    description: 'Backtests strategies and executes risk-aware trades in real-time.',
    price: '2% PnL',
    rating: 4.6,
    reviews: 94,
    badge: 'Pro',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'insight-researcher',
    name: 'InsightResearcher',
    category: 'Research',
    description: 'Scans the web, summarizes reports, and compiles citations.',
    price: '$0.02/run',
    rating: 4.7,
    reviews: 121,
    badge: 'New',
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 'sentinel-sec',
    name: 'SentinelSec',
    category: 'Cybersecurity',
    description: 'Monitors logs, detects anomalies, and triggers incident workflows.',
    price: '$99/mo',
    rating: 4.9,
    reviews: 64,
    badge: 'Enterprise',
    color: 'from-cyan-500 to-sky-600',
  },
];

const Rating = ({ value }) => {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rounded ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300 dark:text-neutral-600'}`}
        />
      ))}
      <span className="ml-1 text-xs text-neutral-500 dark:text-neutral-400">{value.toFixed(1)}</span>
    </div>
  );
};

const AgentCard = ({ agent }) => {
  return (
    <div className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`h-28 bg-gradient-to-r ${agent.color}`} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{agent.name}</h3>
          <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">{agent.badge}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{agent.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <Rating value={agent.rating} />
          <span className="text-neutral-500 dark:text-neutral-400">{agent.reviews} reviews</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-1 text-neutral-900 dark:text-white font-medium">
            <DollarSign className="h-4 w-4" />
            {agent.price}
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm">Add to Dashboard</button>
            <button className="px-3 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketplacePreview = () => {
  return (
    <section id="marketplace" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Marketplace</h2>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">Browse top-rated agents across support, trading, research, and security.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              <BarChart3 className="h-4 w-4" /> Analytics-ready
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              <Shield className="h-4 w-4" /> Secure
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>

        <div id="pricing" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Starter</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">For individuals exploring automation</p>
            <p className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• 2 agents in dashboard</li>
              <li>• Community support</li>
              <li>• Basic analytics</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Get Started</button>
          </div>
          <div className="rounded-2xl p-6 border border-indigo-300/50 dark:border-indigo-500/30 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-neutral-900">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Pro</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">For growing teams and startups</p>
            <p className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">$39/mo</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Unlimited agents</li>
              <li>• Priority support</li>
              <li>• Advanced analytics</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-indigo-600 text-white">Upgrade</button>
          </div>
          <div className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Enterprise</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">For large orgs with compliance needs</p>
            <p className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">Custom</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• SSO and RBAC</li>
              <li>• Dedicated support</li>
              <li>• On-prem options</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
