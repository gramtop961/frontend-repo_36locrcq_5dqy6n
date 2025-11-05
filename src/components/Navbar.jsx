import React from 'react';
import { Rocket, Search, User, Moon, Sun } from 'lucide-react';

const Navbar = ({ onSignIn }) => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow">
            <Rocket className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">AgentHub</a>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#marketplace" className="hover:text-neutral-900 dark:hover:text-white">Marketplace</a>
          <a href="#creator" className="hover:text-neutral-900 dark:hover:text-white">Become a Creator</a>
          <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white">Pricing</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search agents"
              className="pl-8 pr-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
            />
          </div>
          <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {dark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-neutral-700" />}
          </button>
          <button
            onClick={onSignIn}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            <User className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
