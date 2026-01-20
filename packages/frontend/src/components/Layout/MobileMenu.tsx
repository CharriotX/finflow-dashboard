import {
  X,
  LayoutDashboard,
  Calendar,
  CreditCard,
  Tag,
  Target,
  BarChart3,
  Settings,
} from 'lucide-react';
import { Button } from '../ui/Button/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Calendar, label: 'Planner' },
  { icon: CreditCard, label: 'Transactions' },
  { icon: Tag, label: 'Categories' },
  { icon: Target, label: 'Goals' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 z-50 lg:hidden shadow-xl">
        <div className="p-4 border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-linear-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <h2 className="text-lg font-bold dark:text-white">FinFlow</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-700"
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t dark:border-gray-700">
          <Button className="w-full py-3 bg-linear-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium mb-3">
            + Add Transaction
          </Button>
          <Button className="w-full py-3 border-gray-600 rounded-xl font-medium dark:text-white">
            View Reports
          </Button>
        </div>
      </div>
    </>
  );
};
