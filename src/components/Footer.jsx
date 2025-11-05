import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-lg font-semibold text-neutral-900 dark:text-white">AgentHub</div>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Marketplace and control center for AI Agents.</p>
          <div className="mt-4 flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
            <a href="#" aria-label="GitHub" className="hover:text-neutral-900 dark:hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-neutral-900 dark:hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-neutral-900 dark:hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <div className="font-medium text-neutral-900 dark:text-white">Product</div>
          <ul className="mt-2 space-y-2 text-neutral-600 dark:text-neutral-400">
            <li><a href="#marketplace" className="hover:text-neutral-900 dark:hover:text-white">Marketplace</a></li>
            <li><a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Docs</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-neutral-900 dark:text-white">Company</div>
          <ul className="mt-2 space-y-2 text-neutral-600 dark:text-neutral-400">
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-neutral-900 dark:text-white">Legal</div>
          <ul className="mt-2 space-y-2 text-neutral-600 dark:text-neutral-400">
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="pb-10 text-center text-xs text-neutral-500 dark:text-neutral-500">© {new Date().getFullYear()} AgentHub. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
