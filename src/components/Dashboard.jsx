import React from 'react';
import { Home, BarChart3, CreditCard, Bell, Settings } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
    <div className="flex items-center justify-between">
      <span className="text-sm text-neutral-500 dark:text-neutral-400">{label}</span>
      <Icon className="h-4 w-4 text-neutral-400" />
    </div>
    <div className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">{value}</div>
  </div>
);

const Dashboard = () => {
  return (
    <main className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <Home className="h-4 w-4" />
          <span>/</span>
          <span>Dashboard</span>
        </div>

        <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Your Dashboard</h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">Overview of active agents, usage, and billing.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={BarChart3} label="Active Agents" value="3" />
          <StatCard icon={Bell} label="Notifications" value="5" />
          <StatCard icon={CreditCard} label="Monthly Spend" value="$128" />
          <StatCard icon={Settings} label="Configs" value="8" />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Active Agents</h2>
              <a href="#" className="text-sm text-indigo-600">View all</a>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">SupportGuru</div>
                  <div className="text-neutral-500 dark:text-neutral-400">Resolving tickets — 98% CSAT</div>
                </div>
                <button className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">Open</button>
              </li>
              <li className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">QuantAlpha</div>
                  <div className="text-neutral-500 dark:text-neutral-400">Backtesting Q3 strategy</div>
                </div>
                <button className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">Open</button>
              </li>
              <li className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">InsightResearcher</div>
                  <div className="text-neutral-500 dark:text-neutral-400">Weekly market brief</div>
                </div>
                <button className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">Open</button>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Upcoming Billing</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center justify-between"><span>SupportGuru — Monthly</span><span>$49</span></li>
              <li className="flex items-center justify-between"><span>SentinelSec — Monthly</span><span>$99</span></li>
              <li className="flex items-center justify-between"><span>InsightResearcher — Usage</span><span>$12</span></li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Manage Billing</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
