import { Menu, Bell, Search } from 'lucide-react';
import { Button } from '../ui/Button/Button';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export const Header = ({ toggleMobileMenu }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">FinFlow</h1>
                <p className="text-xs text-gray-400">Financial Dashboard</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search transactions, reports..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-lghover:bg-gray-700 relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <Button variant="secondary">Sign in</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
